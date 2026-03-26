---
layout: default
title: Rainbonium
description: Computer Science Graduate | Portfolio
---

## **About**

<section class="carousel-section" id="carousel-section">
  <div class="carousel-sticky">
    <div class="carousel-shell">
      <h2 class="carousel-title"><strong>Projects</strong></h2>

      <div class="carousel" id="carousel">
        <div class="carousel-track" id="carousel-track">
          {% for project in site.data.projects %}
          <article class="project-card">
            {% if project.image %}
            <img
              src="{{ project.image | relative_url }}"
              class="project-image"
              alt="{{ project.name }}"
              loading="lazy"
            />
            {% endif %}

            <div class="project-content">
              <h3>{{ project.name }}</h3>
              <p>{{ project.description }}</p>
              <p><strong>Tech:</strong> {{ project.tech | join: ', ' }}</p>

              <div class="project-buttons">
                {% if project.repo %}
                <a class="project-button primary" href="{{ project.repo }}">Code</a>
                {% endif %}
                {% if project.demo %}
                <a class="project-button" href="{{ project.demo }}">Demo</a>
                {% endif %}
              </div>
            </div>
          </article>
          {% endfor %}
        </div>
      </div>
    </div>
  </div>
</section>

<script src="{{ '/assets/js/carousel.js' | relative_url }}"></script>