---
layout: page
permalink: /
---

# Roberto Finnisaro

_PhD Candidate in Robotics · University of Hull_

---

## Research

<div class="research-flex">

<div class="research-text">

I investigate intelligent control architectures that integrate neural decoding, perception, and robotic embodiment. My work focuses on real-time brain-computer interface systems using functional Near-Infrared Spectroscopy (fNIRS), combined with computer vision and adaptive robotic manipulation.

The objective is to develop robust, interpretable neuro-robotic systems capable of translating cognitive intent into physical interaction.

<p>My research spans:</p>

<ul>
  <li>Brain–Computer Interfaces (BCI)</li>
  <li>Human–Robot Interaction</li>
  <li>Dexterous Robotic Manipulation</li>
  <li>Embodied Artificial Intelligence</li>
</ul>
</div>

<img src="/assets/img/profile.jpg" alt="Roberto Finnisaro" class="profile-img">

</div>
---

## Featured Project

{% assign featured = site.projects | where: "featured", true | first %}

{% if featured %}
### [{{ featured.title }}]({{ featured.url }})

{{ featured.description }}
{% endif %}

---

## Selected Publications

{% assign featured_pubs = site.publications | where: "featured", true | sort: "featured_order" %}

{% for pub in featured_pubs %}

**{{ pub.authors }}** ({{ pub.year }}).  
{{ pub.title }}.  

{% if pub.type == "conference" %}
*{{ pub.conference }}*, {{ pub.location }}.
{% else %}
*{{ pub.journal }}*.
{% endif %}

{% if pub.doi %}
DOI: [{{ pub.doi }}](https://doi.org/{{ pub.doi }})
{% endif %}

<br>

{% endfor %}

[View all publications →](/publications/)

---

## Explore

### [Projects](/projects/)
Research systems and engineering implementations.

### [Research](/research/)
Ongoing investigations and experimental work.

### [Publications](/publications/)
Journal articles and conference papers.

### [Teaching](/teaching/)
Courses, supervision, and mentorship.

### [3D Printing](/3d-printing/)
Design, prototyping, and fabrication work.