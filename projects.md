---
layout:          projects
title:           Projects
show_collection: projects
featured:        true
---

{% assign sorted = site.projects | sort: "date" | reverse %}

<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:2rem;">
  {% for project in sorted %}
    <div style="border:1px solid #ddd; padding:1.5rem; border-radius:8px;">
      <h2><a href="{{ project.url }}">{{ project.title }}</a></h2>
      <p>{{ project.description }}</p>
    </div>
  {% endfor %}
</div>