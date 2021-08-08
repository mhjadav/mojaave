---
title: "I'm Mahipat Jadav"
layout: "base.njk"
description: "I work at Noon Academy, India. Previously i worked with Cleartrip, Polycom, Alpine health. I enjoy Bike riding and long walk at the beach."
---

## Hi, I'm Mahipat Jadav

> I work at Noon Academy, India. Previously i worked with Cleartrip, Polycom, Alpine health. I enjoy Bike riding and long walk at the beach.

<br />

### Recent blog posts
<ul>
{% for post in collections.posts %}
<li><a href="{{ post.url }}">{{ post.data.title }} </a></li>
{% endfor %}
</ul>

<br />

#### Links
- <a href="https://twitter.com/mhjadav">Twitter</a>
- <a href="https://linkedin.com/in/mhjadav">LinkedIn</a>
- <a href="https://github.com/mhjadav">Github</a>
- <a href="mailto:mj@mojaave.com">mj@mojaave.com</a>
- <a href="https://cv.mojaave.com">Download CV</a>

