---
title: Home Infrastructure & Automation
date: 2026-03-02
description: Self-hosted services, Docker orchestration, and automation systems.
permalink: /projects/home-lab/
featured: true
layout: projects
---

## The Forge

A distributed Docker-based infrastructure spanning desktop and laptop nodes.  
Designed for automation, robotics experimentation, data logging, and secure service hosting.

---

## Infrastructure Nodes

{% assign lab = site.home_lab | sort: "order" %}

{% for page in lab %}

### [{{ page.title }}]({{ page.url }})

{{ page.description }}

---

{% endfor %}