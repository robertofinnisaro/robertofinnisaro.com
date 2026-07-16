---
layout: default
title: Brands
permalink: /3d-printing/brands/
---

<div class="grid">

{% assign brands = site.printing | where: "category", "brands" %}

{% for item in brands %}
  <a class="card" href="{{ item.url }}">
    <h3>{{ item.title }}</h3>
  </a>
{% endfor %}

</div>