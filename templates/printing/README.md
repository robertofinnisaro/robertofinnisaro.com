# 3D printing database templates

Copy a template into the matching folder under `src/content/printing/`, rename it,
and fill it in. The file name (without `.md`) becomes the entry's ID and URL, so use
lowercase words joined by hyphens, e.g. `bambu-lab-pla-basic-black.md`.

| Template | Copy to | Links to |
|---|---|---|
| `brand.md` | `src/content/printing/brands/` | — |
| `filament.md` | `src/content/printing/filaments/` | a brand |
| `printer.md` | `src/content/printing/printers/` | — |
| `configuration.md` | `src/content/printing/configurations/` | a printer |
| `profile.md` | `src/content/printing/profiles/` | a filament and a configuration |

Links use the other entry's ID. A link to an entry that doesn't exist stops the build
with an error naming the file, so typos are caught before deploying.

Exported slicer profiles go in `public/printing/profiles/` and are referenced from a
profile's `file` field, e.g. `file: /printing/profiles/pla-basic-black-0.20.json`.

Temperatures are in °C, lengths in mm, speeds in mm/s, volumetric speed in mm³/s and
weights in grams. Optional fields can be deleted rather than left blank. Anything
written below the closing `---` appears as notes on the entry's page.
