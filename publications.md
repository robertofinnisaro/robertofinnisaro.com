---
layout: page
title: Publications
permalink: /publications/
---

{% assign pubs = site.publications | sort: "year" | reverse %}

{% for pub in pubs %}
<div class="publication-entry">

<strong>{{ pub.title }}</strong><br>

{{ pub.authors }} ({{ pub.year }}).  

{% if pub.type == "conference" %}
<em>{{ pub.conference }}</em>, {{ pub.location }}.
{% else %}
<em>{{ pub.journal }}</em>, {{ pub.volume }}{% if pub.issue %}({{ pub.issue }}){% endif %}{% if pub.pages %}:{{ pub.pages }}{% endif %}.
{% endif %}

{% if pub.doi %}
DOI: <a href="https://doi.org/{{ pub.doi }}">{{ pub.doi }}</a>
{% endif %}

{% if pub.license %}
<br><small>License: {{ pub.license }}</small>
{% endif %}

{% if pub.bibtex %}
<br><details>
<summary>BibTeX</summary>
<pre><code>{{ pub.bibtex }}</code></pre>
</details>
{% endif %}

</div>
<hr>
{% endfor %}