---
layout: default
title: Rainbonium
description: Computer Science Graduate | Portfolio
---

## **About**

## **Projects**

{% for project in site.data.projects %}
<div class="project-card" markdown="1">

### {{ project.name }}

{{ project.description }}

**Tech:** {{ project.tech | join: ', ' }}

{% if project.repo %}[Code]({{ project.repo }}){% endif %}
{% if project.demo %} | [Live demo]({{ project.demo }}){% endif %}

</div>
{% endfor %}