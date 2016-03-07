---
layout: app
title: App
permalink: /app/
---

<script src="app.js"></script>
# moveServos
<input type="range" id="neck" min="0" max="180" value="90" step="5" onchange="setNeck(this.value)"/> Neck<br>
<input type="range" id="left"  min="0" max="180" value="90" step="5" onchange="setLeft(this.value)"/> Left<br>
<input type="range" id="right" min="0" max="180" value="90" step="5" onchange="setRight(this.value)" /> Right<br>


# moodlights
<input type="range" id="neck" min="0" max="255" value="0" step="5" onchange="red = this.value; moodlights()"/> Red<br>
<input type="range" id="left"  min="0" max="255" value="0" step="5" onchange="green = this.value; moodlights()"/> Green<br>
<input type="range" id="right" min="0" max="255" value="0" step="5" onchange="blue = this.value; moodlights()" /> Blue<br>


<h1 id="noiselevel">noise</h1>

<h1 id="brightnesslevel">brightness</h1>
