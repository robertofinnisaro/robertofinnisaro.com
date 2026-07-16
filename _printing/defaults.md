---
layout: default
title: Defaults
permalink: /3d-printing/defaults/
---

<div class="grid">

{% for item in site.printing %}
  {% if item.category == "defaults" %}

  <a class="card" href="{{ item.url }}">
    <h3>{{ item.manufacturer }} · {{ item.material.family }}</h3>
  </a>

  {% endif %}
{% endfor %}

</div>