---
layout: default
title: Filaments
permalink: /3d-printing/filaments/
---

<div class="grid">

{% for item in site.printing %}
  {% if item.category == "filaments" %}

  <a class="card filament-card" href="{{ item.url }}">
    <h3>{{ item.title }}</h3>
    <p>{{ item.brand }} · {{ item.material }}</p>
  </a>

  {% endif %}
{% endfor %}

</div>



<script src="/assets/js/filament-db.js" defer></script>
<script src="/assets/js/filter.js" defer></script>