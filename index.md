---
layout: default
title: Rainbonium
description: Computer Science Graduate | Portfolio
---

## About

## Projects

{% for project in site.data.projects %}
### {{ project.name }}

{{ project.description }}

**Tech:** {{ project.tech | join: ', ' }}

{% if project.repo %}[Code]({{ project.repo }}){% endif %}
{% if project.demo %} | [Live demo]({{ project.demo }}){% endif %}

{% if project.image %}![{{ project.name }}]({{ project.image }}){% endif %}

{% endfor %}