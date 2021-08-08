---
title: "Blog"
layout: "base.njk"
---

## Blog posts


<ul>
{% for post in collections.posts %}
<li><a href="{{ post.url }}">{{ post.data.title }} </a></li>
{% endfor %}
</ul>