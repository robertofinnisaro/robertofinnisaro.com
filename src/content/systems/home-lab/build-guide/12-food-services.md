---
title: The Kitchen Is a Distributed System
description: Building a self-hosted meal planner and pantry on Gundabad, and learning why a shopping list is harder than it looks.
published: 2026-10-29
updated: 2026-10-29
systemType: software
part: 3
chapter: 12
order: 12
estimatedTime: Ongoing project
difficulty: Advanced
hardware:
- Dell OptiPlex 3060 Micro
software:
  - Mealie
  - Grocy
  - Food Bridge (FastAPI, SQLite)
  - Home Assistant
  - Docker Compose
tags:
- Mealie
- Grocy
- Home Assistant
- Food
- Integration
draft: false
---

# The Kitchen Is a Distributed System

## Everything green, nothing working

In the middle of October 2026, two recipes sat in the meal plan, one for the 14th and
one for the 15th. The shopping list beside them in Home Assistant held a single entry:
`TEST MANUAL ITEM`, typed in by hand weeks earlier to see what Mealie's API returned.
Nothing else had appeared.

By every measure a monitoring tool understands, the system was fine. On
[Gundabad](/systems/home-lab/reference/hosts/gundabad/), the virtual machine that runs
the lab's food services, `docker compose ps` showed all three containers up. Mealie had
been running for four weeks and reported itself healthy. Grocy had been up just as long.
The small custom service between them, Food Bridge, had restarted a few minutes earlier
and was answering requests. Its log showed Home Assistant calling in on schedule, and
the reply to every call was the same reassuring line:

```text
POST /sync/weekly HTTP/1.1 200 OK
```

The server had done what it was asked, but nothing useful had happened. Uptime Kuma on
[Rivendell](/systems/home-lab/reference/hosts/rivendell/) would happily have reported all
three services as up. The question that mattered was simpler and harder: when dinner is
planned, does the right food end up on the shopping list?

This chapter is about the gap between those two kinds of success. It covers why the
kitchen ended up with three applications and a bridge, how the first calculation came
out right, why the list stayed empty, and what it took to make software understand
groceries. It ends somewhere honest: the planning half works, and the half that touches
physical stock is still being built.

## Three authorities and a bridge

The ambition was ordinary. Choose meals for the week. Work out what they need. Check
what is already in the cupboards, fridge and freezer. Put only the shortfall on the
shopping list, and leave alone anything a person added by hand. Later, record what was
actually bought, and reduce the stock only when a meal is actually cooked.

No single self-hosted application does all of that, but two do most of it well.
**Mealie** is a recipe manager: it imports recipes from the web, structures their
ingredients and keeps a meal plan and shopping lists. **Grocy** is a household
inventory: it knows which products exist, how much of each is in stock, in what unit,
where it is kept and when it expires. **Home Assistant**, already the control plane for
the house (see [Chapter 9](/systems/home-lab/build-guide/09-home-assistant/)), would be
the place to plan meals and see the result.

What none of them does is talk to the others in the way this needs. So the fourth piece
is a small Python service written for the purpose, **Food Bridge**, built with FastAPI,
HTTPX, Pydantic settings and a SQLite database of its own. Its job is to read the meal
plan from Mealie and the stock from Grocy, work out the difference and write that
difference back into Mealie's shopping list.

The design rests on a division of authority that took a while to state clearly:

- **Mealie** is the source of truth for what recipes contain, which meals are planned
  and what is on the shopping list, a list named **Weekly Shop**.
- **Grocy** is the source of truth for what physically exists: products, stock levels,
  units, locations and minimum stock.
- **Food Bridge** owns the translation between them: which Mealie ingredient is which
  Grocy product, how units convert and which shopping entries it created.
- **Home Assistant** is the interface. It triggers the bridge and shows the results. It
  does not repeat the arithmetic itself.

One principle sits underneath all of it: **planning a meal changes intentions; buying
and cooking change inventory.** Putting sausage pasta on Wednesday's plan should not
remove a single gram of pasta from the cupboard. Most of what follows is the system
being taught to keep those two kinds of event apart.

All three services run with Docker Compose from one project directory on Gundabad.
Mealie publishes port 9925, Grocy 9283 and Food Bridge 8787, and each is pinned to the
`Europe/London` timezone so that "this week" means the same thing to all of them. Food
Bridge is built locally rather than pulled from a registry. Its Compose service is named
`food-bridge`, a detail that matters more than it should, as we will see.

## The first good answer

The first test recipe was a sausage pasta imported from a cooking website. It became
the proving ground for every layer.

The first lesson came before any arithmetic: **an ingredient's name is not its
identity.** When Mealie parses a recipe, each ingredient line refers to a *food* record
and a *unit* record, each with its own UUID. Grocy has its own products with numeric IDs
and its own stock units. The text "short pasta" in a recipe and the product "Pasta" in
the pantry may mean the same thing to a person, but to the software they are unrelated
records in two different databases.

So Food Bridge keeps a table, `ingredient_mappings`, keyed on the *pair* of Mealie food
and Mealie unit. Each row points to a Grocy product, its stock unit and a conversion
factor. Keying on the pair rather than the food alone turned out to matter later: the
same ingredient can appear in grams in one recipe and teaspoons in another, and each
pairing needs its own conversion.

The sausage pasta mappings show the kind of translation involved:

| Recipe says | Pantry tracks | Conversion |
|---|---|---:|
| canned tomato, by the can | Chopped Tomatoes, by the tin | ×1 |
| garlic, by the clove | Garlic, by the clove | ×1 |
| olive oil, by the tablespoon | Olive oil, in millilitres | ×15 |
| onion, no unit | Onions, by the piece | ×1 |
| sausage, by the pack | Sausages, by the piece | ×8 |
| short pasta, in grams | Pasta, in grams | ×1 |

One tablespoon of oil becomes fifteen millilitres. One pack of sausages becomes eight
sausages. Once every ingredient has a row like this, the arithmetic is easy.

The first dry run of `POST /sync/weekly`, for the week of 15 to 21 September, found the
one planned sausage pasta and produced exactly the answer it should have:

```text
Garlic:     need 2 cloves; have 1; shortage 1
Olive oil:  need 15 ml;    have 1; shortage 14 ml
Pasta:      need 300 g;    have 0; shortage 300 g
Sausages:   need 8 pieces; have 0; shortage 8
```

It also correctly left the onion, chilli powder and chopped tomatoes off the list,
because the pantry already had enough. And it handled a subtle requirement without
being reminded: every planned occurrence counts. If the same recipe is planned twice in
a week, it is cooked twice and needs twice the ingredients, so the bridge deliberately
does not deduplicate recipes. Where two different meals use the same product, their
needs are summed first and stock is subtracted once.

The same output carried a warning, easy to miss. Grocy reported **1** unit of olive oil,
and the bridge treated that stock as millilitres. If that "1" really meant one bottle,
the shopping calculation was badly wrong, and no amount of correct code downstream would
fix it. A stock level is only as meaningful as the unit it is counted in.

## Whose item is it?

The shopping list itself raised a different kind of question.

Home Assistant's Mealie integration exposes the Weekly Shop list as a to-do entity,
`todo.server_mealie_weekly_shop`. Home Assistant also has its own built-in shopping
list, and early on it was worth being explicit that this was *not* the destination. The
list that mattered was the one in Mealie, where the recipes live.

The hand-typed `TEST MANUAL ITEM` had been added to inspect what a shopping item looks
like through Mealie's API: a UUID, a quantity of one, a food reference and an empty
`extras` field. In doing so it made a safety rule obvious. If the bridge rewrites the
shopping list every time the meal plan changes, what stops it deleting the things people
add by hand: the washing-up liquid, the birthday candles, the item that has nothing to do
with any recipe?

Matching on text is no answer. A manual "garlic" and a generated "garlic" look identical.
So the bridge keeps a second ledger, `generated_shopping_items`, recording for each Grocy
product the exact Mealie shopping-item UUID it created, the quantity it asked for and when.
The design also marks generated items in Mealie itself, inside `extras`:

```json
{
  "extras": {
    "food_bridge_generated": true,
    "grocy_product_id": 9
  }
}
```

Reconciliation then follows a strict rule. The bridge creates entries that are newly
needed, updates quantities that have changed and deletes entries that are no longer
needed. It does this **only for items it owns.** Anything else on the list is invisible
to it.

A third table, `shopping_unit_mappings`, handles the last translation: from Grocy's stock
units back to Mealie's shopping units. Tin becomes can, Gram becomes gram, Millilitre
becomes millilitre, and Piece becomes no unit at all, so eight sausages appear as "8
Sausages" rather than "8 Piece Sausages".

That third table was also the scene of one of the project's more humbling moments. After
the code to create it was added, a check with `sqlite3` listed only the first two tables.
The cause was not a design flaw but Python indentation: the new `CREATE TABLE` statement
sat at the wrong level and never ran. Fixing it meant correcting the database
initialisation and rebuilding the container, and the rebuild only worked once it named
the right Compose service, `food-bridge`, not `bridge`. After that, a query returned all
six unit mappings. An elaborate system had been blocked by a few misplaced spaces.

## Home Assistant, and what it would and would not accept

The Home Assistant side grew into a five-view Food dashboard: Overview, Meal Plan,
Shopping, Pantry and Recipes. Meals are planned with a date picker and drop-downs for
recipe and meal type, built from `input_datetime` and `input_select` helpers. The Mealie
integration contributes a calendar for each meal type, from breakfast to dessert, and
REST sensors read the pantry's product count, missing items and stock from Food Bridge.

Two problems here were less about food than about the shape of data.

The first was small. Home Assistant's action for adding a meal-plan entry wanted a recipe
**UUID**, while Food Bridge looked recipes up by their **slug**, the readable name in the
URL. Each side had to be given the identifier it expected.

The second was more stubborn. Removing a planned meal through the integration's
`mealie.delete_mealplan` action required the meal-plan ID as a string. The IDs were
numbers, and Home Assistant's templating kept turning them back into integers, however
the template tried to force a string. The schema rejected the call every time.

The fix was to stop fighting the schema and go around it. Food Bridge gained a route of
its own:

```text
DELETE /mealie/mealplan/{mealplan_id}
```

Home Assistant puts the ID into a URL, where it is just text, and the bridge makes the
call to Mealie. The planned-meal selector shows entries such as
`2026-09-15 | Dinner | Sausage pasta | #3`, and the removal script takes the number after
the `#`.

When the actual Home Assistant configuration was reviewed, it showed how the system had
grown. The automations file contained **three** copies of an automation that loads
recipes and **two** of the one that reconciles the weekly shop, each pair sharing IDs.
Older scripts were still trying to add shopping items directly from Home Assistant, still
pointing at a placeholder entity, `todo.YOUR_MEALIE_SHOPPING_LIST`. Those scripts did the
bridge's job a second time, and anything they created would have been outside the
ownership ledger, invisible to reconciliation and never cleaned up.

The recommended shape is much simpler: one recipe-refresh automation, and one shopping
reconciliation that calls the bridge every ten minutes. Planning a meal from the dashboard
triggers a reconciliation straight away; the timer catches changes made directly in
Mealie. Replacement scripts and automations were drafted to do exactly that, but whether
every one was installed unchanged is not recorded, and it should be checked on the live
system.

One smaller misalignment was also caught: the bridge's idea of "this week" ran Monday to
Sunday, while some early Home Assistant scripts used today plus six days. Two components
disagreeing about what a week is would make the dashboard and the list quietly disagree
about what to buy.

## Why the list stayed empty

Which brings us back to October. Two recipes planned, every service healthy, every
request answered with a 200, and nothing new on the list.

The user described it plainly at the time:

> "I have added 2 recipies to my meal plan on 14th and 15th Oct, the shopping list has
> not updated and still only shows the test manual item"

The answer was in the mappings. The first recipe used a pasta ingredient that *looked*
familiar but pointed at a different Mealie food record from the "short pasta" mapped for
the sausage pasta. Same word, different UUID, no mapping. The second recipe, a sweet and
sour chicken made without deep-frying, was almost entirely new to the bridge.

A snapshot of the project files had suggested that this recipe's ingredients were
unstructured, just lines of text. A read-only check against the *live* Mealie API showed
otherwise: the ingredients had proper food and unit IDs. They simply had no mappings.

```text
UNMAPPED chicken thigh   (grams)
UNMAPPED vegetable oil   (millilitres)
UNMAPPED egg             (no unit)
UNMAPPED cornstarch      (grams)
UNMAPPED light soy sauce (millilitres)
UNMAPPED white onion     (no unit)
UNMAPPED bell pepper     (no unit)
OK       garlic
...
```

The distinction between *unstructured* and *structured but unmapped* changed the fix.
Nothing needed retyping in Mealie. What was missing was a way to introduce new
ingredients to the bridge.

It also exposed the real meaning of that 200. The weekly sync endpoint returns a JSON body
that can say, in effect, "not ready, nothing changed". The status code reports that the
request was handled, not that the household got what it needed. A health check can only
tell you that something is running; whether it did the right thing has to be checked
against the result itself.

## From one recipe to any recipe

The first response was targeted. Grocy had a product called Chicken and little else that
this recipe needed, and the user asked:

> "Is there a quick way to map these? I have Chicken in grocy but that isit"

A one-off helper script mapped the sweet and sour chicken. It reused existing Grocy
products where they fitted, such as Chicken and Onions, and created definitions for the
missing ones: cornstarch, vegetable oil, eggs, brown sugar, bell peppers and the sauces.
It treated water as a special case, since a recipe's water is not something to buy.

The script had a preview mode and an `--apply` mode, and that briefly caused its own
confusion: after a run, the new products seemed not to exist. Part of the explanation was
Grocy itself. A new product with zero stock does not appear in the Stock Overview, only in
the product list. A diagnostic that checked each mapping against Grocy's real product IDs,
reporting `OK`, `UNMAPPED`, `MISSING` or `BROKEN`, settled it. The user's verdict:
"that all works now".

The obvious next question was whether every new recipe would need the same work. The
answer was a general tool, `food_auto_map_recipes.py`, with a rules file of approved
aliases. It scans Mealie's recipes, reuses food and unit pairs that are already mapped,
matches exact names or approved aliases, applies conversions that are known to be safe
and, crucially, *previews* anything it is unsure of instead of guessing. It creates Grocy
products only with explicit approval and never changes stock levels.

Its first real test was modest and honest. On a newly added recipe it mapped **three**
ingredients automatically and left **twelve** for a person to decide. That is not full
automation, but it is the right failure mode: a mapper that is unsure asks, rather than
quietly putting the wrong thing on the list.

## The teaspoon of cornstarch

The same message that reported three-out-of-fifteen raised a better problem: cornstarch
appears in grams in one recipe and in teaspoons in another.

A conversion table keyed on the food alone cannot handle that, and a general rule that
turns teaspoons into grams is no better. A teaspoon is a volume; how much it weighs depends
on what is in it and how it is packed. For illustration, a teaspoon of cornstarch is
*roughly* 3 grams, but that figure is an approximation for one ingredient, not a rule that
could be applied to salt, flour or sugar.

The better authority is Grocy, which supports **product-specific unit conversions**.
Cornstarch can remain one product, stocked in grams, with its own conversion from
teaspoons, and the bridge's mapping for "cornstarch, by the teaspoon" can use it. An
enhanced mapper that reads Grocy's product-specific and indirect conversions was written.
Whether it has been installed, and a teaspoon recipe tested against it, is not yet
confirmed.

Vegetables pushed the same question further. Carrots are naturally counted by the piece,
with an approximate weight per carrot if a recipe asks for grams. Spring onions are
counted by the stalk even though they are bought in bunches of no fixed size. Cabbage is
better tracked by weight when recipes ask for leaves or fractions of a head. Salad leaves,
spinach, mushrooms and green beans are weighed; peppers, cucumbers and tomatoes are often
counted, depending on how a household cooks and shops. These are recommendations for
setting up products, not a migration that has been carried out.

## Chicken is not one thing

The last design question was about meat, and it showed how far this project had drifted
from a shopping list into taxonomy. Should "chicken", "chicken thigh" and "chicken
breast" be tracked as one product?

The answer was no. Each cut gets its own Grocy product, usually measured in grams:
breast, boneless thigh, bone-in thigh, whole birds, wings. Grocy's product groups can
organise them, but Food Bridge maps every ingredient to one specific product and **does
not substitute between them**. If a recipe needs 400 g of breast and the freezer holds
800 g of thighs, the bridge must not conclude there is enough breast. Bone-in and boneless
are not even equivalent by weight. Fresh and frozen, by contrast, are usually the same
product kept in different locations.

That recommendation exposed a shortcut in the mapper's own rules file, which aliased
`chicken thigh` to the generic `Chicken`. It was convenient when Chicken was the only
product in Grocy, and it is exactly the kind of confident guess the mapper was meant to
avoid. Aliases should join different spellings of the *same* thing, not merge different
things. The rules file needs reviewing against that principle; that has not been done yet.

## Where it stands

It would be easy to end this chapter with a finished system. That would not be true.

**What works.** Mealie, Grocy and Food Bridge run on Gundabad and serve requests. Home
Assistant shows the meal calendars, recipes, pantry and the Weekly Shop list. The weekly
calculation produces correct, aggregated shortages. The ingredient, shopping-unit and
ownership tables exist and hold real data. The ownership model protects manual items by
design. Missing mappings, the reason the October list stayed empty, can be found with a
diagnostic and filled with a preview-first mapper that reuses what it already knows.

**What has been written but not confirmed in place.** The consolidated Home Assistant
scripts and automations, the shared shopping-sync script with failure notifications, a
scheduled run of the auto-mapper, the conversion-aware mapper, and further hardening of
reconciliation: paging through Mealie's API, preventing two reconciliations running at
once, and handling items that were deleted or edited by hand.

**What is still to be built.** Two workflows complete the loop, and neither exists yet:

- **Shopping to stock.** After a shop, record what was *actually* bought, in real packs
  and weights, and add it to Grocy. The list says "300 g pasta"; the shop sells 500 g bags.
- **Cooking to consumption.** When a meal is marked cooked, deduct its ingredients from
  Grocy **exactly once**, however many times the button is pressed or a request is
  retried. Grocy has an API for consuming stock, and the bridge has a wrapper for it, but
  nothing yet ties a specific planned meal to a durable record that it has already been
  consumed.

Alongside them sit the operational tasks every service in this book eventually needs:
backups of the three databases (covered in
[Chapter 14](/systems/home-lab/build-guide/14-backup-strategy/)), automated tests,
readiness checks that mean more than "the process is up", and proper handling of the
credentials the bridge uses to talk to Mealie and Grocy.

The lesson of Gundabad is not really about food. The containers were never the hard part.
The hard part was meaning: whether two records are the same ingredient, whether "1" is a
millilitre or a bottle, whether an item on a list belongs to a person or a program,
whether a planned meal is a promise or a transaction, and whether a thigh is a breast.
Each of those questions was answered by making the system *less* clever: by refusing to
guess, keeping a ledger of what it owns and asking when it is unsure. The next chapter
turns to how the lab is watched, and why a page full of green lights is where checking
starts, not where it ends.
