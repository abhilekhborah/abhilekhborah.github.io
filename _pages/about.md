---
title: "About"
layout: gridlay
sitemap: false
permalink: /about/
---

## About

{% for member in site.data.pi %}

<div class="jumbotron">
<div class="row">
<div class="col-sm-4">
  <img src="{{ site.url }}{{ site.baseurl }}/images/{{ member.photo }}" width="100%" style="max-width:250px"/>
</div>
<div class="col-sm-8 col-xs-12">
  <h3>{{ member.name }}</h3>
  <h4><i>{{ member.info }}</i></h4>
  {% if member.email %}<a href="mailto:{{ member.email }}" target="_blank"><i class="fa fa-envelope-square fa-3x"></i></a> {% endif %}
  {% if member.cv %} <a href="{{ site.url }}{{ site.baseurl }}/{{ member.cv }}" target="_blank"><i class="ai ai-cv-square ai-3x"></i></a> {% endif %}
  {% if member.scholar %} <a href="{{ site.url }}{{ site.baseurl }}/{{ member.scholar }}" target="_blank"><i class="ai ai-scholar-square ai-3x"></i></a> {% endif %}
  {% if member.github %} <a href="{{ member.github }}" target="_blank"><i class="fa fa-github-square fa-3x"></i></a> {% endif %}
  {% if member.linkedin %} <a href="{{ member.linkedin }}" target="_blank"><i class="fa fa-linkedin-square fa-3x"></i></a> {% endif %}

  <ul style="overflow: hidden">
    {% for education in member.education %}
      <li>{{ education | replace: "-","&#8211;" }}</li>
    {% endfor %}
  </ul>

</div>
</div>
</div>
{% endfor %}

{% if site.data.grants %}
<div class="jumbotron">
  <h3>My Journey</h3>
  <p>
    {% for grant in site.data.grants %}
      {{ grant.name }}{% if forloop.last %}!{% else %}, {% endif %}
    {% endfor %}
  </p>
</div>
{% endif %}

{% if site.data.experiences %}

<div class="jumbotron">
  <h3>Experience</h3><br/>
  <ul class="timeline">
    {% for experience in site.data.experiences %}
      <li class="timeline-item">
        <div class="timeline-badge">
          <img src="{{ site.url }}{{ site.baseurl }}/images/{{ experience.company_logo }}" width="50" height="50" style="border-radius: 50%"/>
        </div><br/>
        <div class="timeline-panel">
          <div class="timeline-heading">
            <h4 class="timeline-title">{{ experience.company_name }}</h4>
            <p><small class="text-muted"><i class="fa fa-calendar-o" style="margin-right: 5px;"></i> {{ experience.start_date }} - {{ experience.end_date }}</small></p>
          </div>
          <div class="timeline-body">
            <h5>{{ experience.position }}</h5>
            <p>{{ experience.description }}</p>
          </div>
        </div>
      </li>
    {% endfor %}
  </ul>
</div>
{% endif %}

{% if site.data.awards %}

<div class="jumbotron">
  <h3>Achievements</h3>
  <ul>
    {% for award in site.data.awards %}
      <li>{{ award.name | replace: "-","&#8211;" }}</li>
    {% endfor %}
  </ul>
</div>
{% endif %}

{% if site.data.candc %}

<div class="jumbotron">
  <h3>Clubs, Chapters & Communities</h3>
  <ul>
    {% for c in site.data.candc %}
      <li>
        <b>{{ c.name }}</b>
        <span style="display: block; margin-bottom: 5px;"></span>
        <p>{{ c.description | replace: "-","&#8211;" }}</p>
      </li>
    {% endfor %}
  </ul>
</div>
{% endif %}






