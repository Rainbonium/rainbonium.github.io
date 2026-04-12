---
layout: default
title: Rainbonium
description: Computer Science Graduate | Portfolio
---

## **About**
I'm a motivated and detail-oriented Computer Science graduate, with hands-on experience in STEM 
instruction, program development, and technical troubleshooting. Seeking an entry-level position 
where I can apply my programming skills, problem-solving abilities, and passion for technology to 
contribute to innovative software and help society while continuing to grow as a developer.

<section class="carousel-section" id="carousel-section">
  <div class="carousel-sticky">
    <div class="carousel-shell">
      <div class="carousel" id="carousel">
        <h2 class="carousel-title"><strong>Projects</strong></h2>

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
                <a class="project-button primary" href="{{ project.repo }}">Repo</a>
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