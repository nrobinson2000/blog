---
layout: post
title: Product
permalink: /sparkbot/
---

[![Build Status](https://travis-ci.org/nrobinson2000/sparkbot-default.svg?branch=master)](https://travis-ci.org/nrobinson2000/sparkbot-default)

## Introduction
>The goal of my project is to create a modular IoT robotics platform with a customizable 3D printed body, an add on system, and a website for sharing community created code, add on boards and body designs for other users to use and enjoy.

My project will use the [Particle Photon](https://particle.io/), an inexpensive programmable Wi-Fi development board that I am very fond of.  The Photon runs C++ on its micro operating system, and communicates with Particle's servers to create a low cost, high power device. Code can be uploaded to the Photon in several ways. Flashed from the [Particle.io web IDE][7], uploaded from either the Particle DEV IDE or the Particle CLI tool, or compiled locally and flashed over USB with DFU-util.

SparkBot is a kit designed for students at any age who are interested in technology or robotics.  Its purpose is to create a robot front end for the Photon that will get people excited to program and create things with. It will give a reason for people to become interested in the Internet of Things by creating an exciting interactive experience.

## Planning
My [finished timeline](https://docs.google.com/document/d/1ECvW88TkWGvGFmdw64F-xl0qW6fytZt4299X66oWscc/edit) can be found on Google Drive.

## Hardware
My project uses many components and several custom designed PCBs.  I have made several versions of the main PCB, each one with fixes and corrections from the last.  Below is a representational image of the PCB, and an image of the Photon and Arduino pins used by the PCB.

<center><img src="/images/PCB.png" width="351.5px"><img src="/images/Pinout.png" width="370.31px" height="470.573px"></center><br>

The SparkBot shield PCB makes use of most of pins of the Photon, allowing it to work with the sensors, servos, buttons and lights on a SparkBot.  This PCB was developed using [Fritzing](http://fritzing.org).  Pictured here is version 3.0 of the PCB, and I am expecting it to arrive soon. There are several free pins that can be programmed freely to work with other components so a SparkBot can use parts on a breadboard without the Photon needing to be taken out its socket.

Getting a perfect pinout was difficult because of the limited number of PWM pins and analog pins.  The pins are all over the place, but are organized in my library with constants for the pins.

Below is a picture of one of my Photons connected to the PCB I have developed.  It is connected to three servos, a microphone, a button, and an LED.

<center>![Top-View](/images/top-view.jpg)</center>


## Code
I have developed a [C++ library][10] that makes using and programming SparkBot simpler and more convenient.

Below is the barebones code to use my library.

```cpp
#include "application.h"
#include "sparkbot-default.h" // Import the sparkbot-default library.
SYSTEM_THREAD(ENABLED);

sparkbot sb; // Create sb, an object of the sparkbot class.

void syncServosHandler(const char *event, const char *data)
{
  sb.syncServosSlave(event, data);
}

void RGBSlaveHandler(const char *event, const char *data)
{
  sb.RGBSlave(event, data);
}

void setup() // Mandatory setup function.
{
  sb.begin();
  interrupts();
  Particle.subscribe("syncServos", &syncServosHandler, MY_DEVICES);
  Particle.subscribe("RGB", &RGBSlaveHandler, MY_DEVICES);
}

void loop()
{
  sb.refresh();
}
```



## Open Source
SparkBot respects and uses many open source technologies and services. All of the software sources and hardware files can be found freely on GitHub.

[![Creative Commons License](/images/cc.png)][8]  
SparkBot by [Nathan Robinson][9] is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][8].  
Based on a work at [https://github.com/nrobinson2000/sparkbot][2].

To help with the development of SparkBot you can either donate bitcoin or contribute to my GitHub repositories.  If you wish to suggest something for this page or correct anything you can **[edit this page on GitHub](https://github.com/nrobinson2000/nrobinson2000.github.io/blob/master/sparkbot.md)**.

If you want to contribute to my source code you can fork my repositories.

```bash
$ git clone https://github.com/nrobinson2000/sparkbot-default.git

$ git clone https://github.com/nrobinson2000/sparkbot.git
```

## Repositories
SparkBot is organized into three repositories. One for the C++ library, and the other for everything else, including the hardware files, plans and images.

#### [C++ Library and Photon Code][10]

#### [Designs and Arduino Code][2]

#### [Website](https://github.com/nrobinson2000/nrobinson2000.github.io)

## Kit components
* 1 Particle Photon
* 1 Micro USB cable
* 1 Half Breadboard
* 1 Fully assembled Robot body
* 10 Jumper wires
* 1 Protective travel case
* 1 User manual and quick start guide

## Using IFTTT with SparkBot
IFTTT, (if this then that) is a website that allows web services to send data between each other in a user-friendly way.  Below is a tutorial on how to setup IFTTT with SparkBot.
#### **How to use webhooks with a SparkBot to communicate with IFTTT and control anything.**
*Note: You must have a Photon / SparkBot already set up and be logged into [Particle CLI](https://github.com/spark/particle-cli) on your machine.*

* Step 1: Create an [IFTTT account](https://iftt.com)
* Step 2: Create a recipe that uses the [Maker channel trigger](https://ifttt.com/channels/maker/triggers/1636368624-receive-a-web-request) or use the recipe below to control a Wemo switch.  *Name the event* ***wemo.***

<center><a href="https://ifttt.com/view_embed_recipe/302832-toggle-wemo-switch-with-http-get-request" target = "_blank" class="embed_recipe embed_recipe-l_40" id= "embed_recipe-302832"><img src= 'https://ifttt.com/recipe_embed_img/302832' alt="IFTTT Recipe: Toggle Wemo Switch with HTTP GET request connects maker to wemo-switch" width="370px" style="max-width:100%"/></a><script async type="text/javascript" src= "//ifttt.com/assets/embed_recipe.js"></script></center>

* Step 3: Create a .json file for the webhook. *Name the file* ***wemo.json***
{% highlight json %}
{
  "eventName": "toggleWemo",
  "url": "https://maker.ifttt.com/trigger/wemo/with/key/[PUT YOUR IFTTT KEY HERE]",
  "requestType": "GET",
  "mydevices": true
}
{% endhighlight %}

* Step 4: Upload the webhook to the Particle cloud

```bash
$ particle webhook create wemo.json
```

* Step 5: Toggle the Wemo switch from your code!

```cpp
particle.publish("toggleWemo");
```


[0]: https://github.com/nrobinson2000/sparkbot/zipball/master
[1]: https://github.com/nrobinson2000/sparkbot/tarball/master
[2]: https://github.com/nrobinson2000/sparkbot
[4]: https://disqus.com/home/forums/sparkbot/
[5]: http://www.amazon.co.uk/registry/wishlist/1AIE1WKJD3ZFD
[6]: #sparkbot-the-iot-robotics-kit-for-everyone
[7]: https://build.particle.io/
[8]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[9]: http://nrobinson2000.github.io/sparkbot/
[10]: https://github.com/nrobinson2000/sparkbot-default
