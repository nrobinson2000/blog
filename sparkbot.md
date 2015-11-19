---
layout: post
title: SparkBot
permalink: /sparkbot/
---
[![Build Status](https://travis-ci.org/nrobinson2000/sparkbot-default.svg?branch=master)](https://travis-ci.org/nrobinson2000/sparkbot-default)

# **What is it?**

SparkBot is a robotics kit designed for makers and hobbyists, recommended for individuals aged 12 and up. It uses the Photon by Particle to teach C++ and principles of the Internet of Things. Its goal is to teach functional robotics, Arduino, and REST API's in an understandable method.

The purpose of SparkBot is to create a robot front end for the Photon that will get people excited to program and make projects with. It will give a reason for people to become interested in the Internet of Things by creating an exciting interactive experience.

SparkBot is a two part product. Although it uses both hardware and software from Particle, unique PCBs and 3D printed bodies must be produced. SparkBot also has its own software library with custom C++ functions to improve the SparkBot programming experience.


# **How does it work?:**

SparkBot uses the Particle Photon as its brain. It runs C++ on its micro operating system, that communicates with Particle's servers to create a low cost, high power device. Code can be uploaded to the Photon in several ways. Flashed from the [Particle.io web IDE][7], uploaded from either the Particle DEV IDE or the Particle CLI tool, or compiled locally and flashed over USB serial.

The Photon is Particle's second IoT development board. Their first was the Core, a huge Kickstarter success. The Photon was developed without any Kickstarter support, and the Electron, their third board, which uses celluar technology, was successfully funded on Kickstarter this year.


# **Is it free to use?:**

SparkBot respects and uses many open source technologies and services. All of the software sources and hardware files can be found freely on GitHub.

[![Creative Commons License](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)][8]  
SparkBot by [Nathan Robinson][9] is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][8].  
Based on a work at [https://github.com/nrobinson2000/sparkbot][2].


# **Repositories:**

SparkBot is organized into two repositories. One for the C++ library, and the other for everything else, including the hardware files, plans and images.

#### [C++ Library][10]

#### [Designs Repository][2]

*It is likely that a third repository will be created for the SparkBot documentation.*


# **What's in the kit?:**

* 1 Particle Photon
* 1 Micro usb cable
* 1 Half Breadboard
* 1 Fully assembled Robot body
* 10 Jumper wires
* 1 Protective travel case
* 1 User manual and quickstart guide


# **What do each of the pins do?**
![](https://raw.githubusercontent.com/nrobinson2000/sparkbot/master/PCB/Pinout.png)


The SparkBot shield makes use of most of pins of the Photon, allowing it to work with all of the SparkBot components, as well as expose several pins for external GPIO.


# **Why are you making this?**

I created the idea for SparkBot back in 9th grade. I have been developing it since then, and have turned it into the base of my grade 10 personal project.

# **How can I contribute to this?**
To help with the development of SparkBot you can either donate bitcoin or contribute to my GitHub repositories.  If you wish to suggest something for this page or correct anything you can [edit this page on GitHub][https://github.com/nrobinson2000/nrobinson2000.github.io/blob/master/sparkbot.md].

If you want to contribute to my source code you can fork my repositories.
{% highlight shell %}
git clone https://github.com/nrobinson2000/sparkbot-default.git

git clone https://github.com/nrobinson2000/sparkbot.git
{% endhighlight %}




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
