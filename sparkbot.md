---
layout: post
title: SparkBot
permalink: /sparkbot/
---
[![Build Status](https://travis-ci.org/nrobinson2000/sparkbot-default.svg?branch=master)](https://travis-ci.org/nrobinson2000/sparkbot-default)

# **Outline**

SparkBot is a robotics kit designed for makers and hobbyists, recommended for individuals aged 12 and up. It uses the Photon by Particle to teach C++ and principles of the Internet of Things. Its goal is to teach functional robotics, Arduino, and REST API's in an understandable method.

The purpose of SparkBot is to create a robot front end for the Photon that will get people excited to program and make projects with. It will give a reason for people to become interested in the Internet of Things by creating an exciting interactive experience.

SparkBot is a two part product. Although it uses both hardware and software from Particle, unique PCBs and 3D printed bodies must be produced. SparkBot also has its own software library with custom C++ functions to improve the SparkBot programming experience.


# **Photon**

SparkBot uses the Particle Photon as its brain. It runs C++ on its micro operating system, that communicates with Particle's servers to create a low cost, high power device. Code can be uploaded to the Photon in several ways. Flashed from the [Particle.io web IDE][7], uploaded from either the Particle DEV IDE or the Particle CLI tool, or compiled locally and flashed over USB with DFU-util.

The Photon is Particle's second IoT development board. Their first was the Core, a huge Kickstarter success. The Photon was developed without any Kickstarter support, and the Electron, their third board, which uses cellular technology, was successfully funded on Kickstarter this year.

# **Code**
I have developed a [C++ library][10] that makes using and programming SparkBot simpler and more convenient.  Below is the barebones code to use my library.

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

  sb.moveNeck(90);
  sb.moveLeft(90);
  sb.moveRight(90);
}

void loop()
{
  sb.refresh();
}

```


# **PCB and Pinout**
<center><img src="/PCB.png" width="351.5px" height="394.25px"><img src="/Pinout.png" width="370.31px" height="470.573px"></center><br>

The SparkBot shield PCB makes use of most of pins of the Photon, allowing it to work with the sensors, servos, buttons and lights on a SparkBot.  This PCB was developed using [Fritzing](http://fritzing.org).  Pictured here is version 3.0 of the PCB, and I am expecting it to arrive soon. There are several free pins that can be programmed freely to work with other components so a SparkBot can use parts on a breadboard without the Photon needing to be taken out its socket.

Getting a perfect pinout was difficult because of the limited number of PWM pins and analog pins.  The pins are all over the place, but are organized in my library with constants for the pins.

# **Kit components**

* 1 Particle Photon
* 1 Micro usb cable
* 1 Half Breadboard
* 1 Fully assembled Robot body
* 10 Jumper wires
* 1 Protective travel case
* 1 User manual and quickstart guide

# **Repositories**

SparkBot is organized into two repositories. One for the C++ library, and the other for everything else, including the hardware files, plans and images.

#### [C++ Library][10]

#### [Designs Repository][2]

*It is likely that a third repository will be created for the SparkBot documentation.*

# **Open Source**

SparkBot respects and uses many open source technologies and services. All of the software sources and hardware files can be found freely on GitHub.

[![Creative Commons License](/cc.png)][8]  
SparkBot by [Nathan Robinson][9] is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][8].  
Based on a work at [https://github.com/nrobinson2000/sparkbot][2].

To help with the development of SparkBot you can either donate bitcoin or contribute to my GitHub repositories.  If you wish to suggest something for this page or correct anything you can **[edit this page on GitHub](https://github.com/nrobinson2000/nrobinson2000.github.io/blob/master/sparkbot.md)**.

If you want to contribute to my source code you can fork my repositories.

```bash
$ git clone https://github.com/nrobinson2000/sparkbot-default.git

$ git clone https://github.com/nrobinson2000/sparkbot.git
```
# **Todo list**
* ```Get PCB from Ragworm delivered.  Assemble it with the components from Mouser.```
* ```Test PCB.  Hopefully it will work perfectly this time.```
* 

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
