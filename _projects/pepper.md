---
title: Pepper Robot Platform
date: 2026-03-01
description: Development log and configuration documentation for Pepper humanoid robot.
permalink: /projects/pepper/
featured: false
layout: projects
---

# Pepper Robotic Platform

## Overview

Development, configuration and integration work for the SoftBank Pepper platform.

---

## Development Log

{% assign entries = site.pepper | sort: "date" | reverse %}

{% for entry in entries %}

### [{{ entry.title }}]({{ entry.url }})

{{ entry.description }}

---

{% endfor %}