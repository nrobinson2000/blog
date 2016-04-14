---
layout: page
title: PechaKucha
permalink: /pechakucha/
---

I am now working on my PechaKucha presentation.  I have to make 20 slides of 20 seconds each.  Each slide must contain a image that fills the slide.  Text is allowed, but only one word maximum per slide, as slides are preferably text free.

I want to make my PechaKucha into a video and embed it on this page.

## To do:
* Pick the 20 best images
* Put them on slides is a meaningful order (chronological)
* Record audio

## Slide Planning
* **Title Slide: (text)**  Hi.  I'm Nathan Robinson.  My project is demonstration of the practical uses of the Internet of Things and how it can be used effectively.
* **Rationale For Project:** I decided to make an Internet of Things device to investigate the process of creating and programming an internet enable product.  I am very interested in technology and I love creating devices, so I decided to research how a cloud connected product could be created and if it could be a useful product.
<img src="/PechaKucha/GoodPictures/IMG_0003.jpg">
* **1 IoT drawing.  COMPONENTS + PHOTON = CLOUD CONNECTED PRODUCT:** The Internet of Things is the network of physical objects embedded with electronics, software, sensors, and network connectivity that enables them objects to collect and exchange data.  Put simply, connecting sensors and other components to an internet enabled microcontroller board opens up an entire new use for those components, as they can then be interfaced with from anywhere in the world.
<img src="/PechaKucha/GoodPictures/IMG_0004.jpg">
* **2 Picture of Core:** This is the Core.  A wifi-enabled micro-controller board the size of a postage stamp.  Particle, the producer of the board is an awesome company that I have been a fan of since I backed them on Kickstarter.  I received the my core in 2013 but didn't actually begin to use it until early 2014.
<img src="/PechaKucha/GoodPictures/IMG_0055.jpg">
* **3 Picture of Core circuit:** In this picture, my Core has two buttons hooked up to it.  This simple circuit allowed me to post a tweet whenever I pressed one of the buttons.  This little project allowed me to make use of API's to sent data directly from the core to Twitter.
<img src="/PechaKucha/GoodPictures/IMG_1439.jpg">
* **4 Picture of photon:** In late 2014 Particle developed a new IoT board.  It was called the Photon and included many upgrades including faster wi-fi, more storage and a cheaper price.  I pre-ordered a few, and waited months for them to arrive.  Eventually in July 2015, my Photons came and I officially started my project.
<img src="/PechaKucha/GoodPictures/IMG_1471.jpg">
* **5 First ed. pcb:** I wanted to create a PCB for my product to hold it all to together and for it to look well made.  I decided to use Fritzing, a free to use program that allows you design PCBs by dragging and connecting components together on virtual PCB.  Here is the first board that I actually paid to have made.  I immediately noticed that the it was faulty because I had an error in my design.
<img src="/PechaKucha/GoodPictures/IMG_1475.jpg">
* **6 1.5.0 pcb:** I actually bothered to assemble this version of the board, as I couldn't immediately spot any flaws with it.  The board featured three servo motor ports, an RGB port, a microphone port, two button ports, a buzzer port and a GPIO header.  However there was a conflict with the pins, as the RGB was not connected to PWM pins on the Photon, meaning that the brightness of the LEDs could not be changed dynamically.  Also the servos did not function.  I didn't know it yet, but this was because there was not enough power on the Photon to drive three motors.
<img src="/PechaKucha/GoodPictures/IMG_1490.jpg">
* **7 three boards in tins:** Side note, the PCB fabrication house that I had been ordering my boards from only sold boards in multiples of three, so I had to buy three times as many boards as I needed.  The fabrication house was in America, which meant two things.  It took weeks to ship and the shipping cost more than the boards.
<img src="/PechaKucha/GoodPictures/IMG_1527.jpg">
* **8 board v2.0:**  After fixing many of my mistakes with my last board, I quickly ordered a replacement.  This new board corrected the mistakes I had with my previous boards, but it still was not perfect, as the motors did not function properly when the RGB was in use because of a limitation of the Photon.  The are two pairs of PWM pins that share the same clock, meaning that they can not both be used as PWM outputs at the same time.
<img src="/PechaKucha/GoodPictures/IMG_1634.jpg">
* **9 3.0 board:** In this third revision of the board, the RGB and buzzer worked, the GPIO worked and the buttons worked.  The servos were non-functional, despite the fact that this update was supposed to fix the servos.  I also found a new fabrication house based in the UK that offered pretty fair prices and didn't require me to buy my board in multiples of three.  I assembled this board in November.
<img src="/PechaKucha/GoodPictures/IMG_1667.jpg">
* **10 underside of board:** There was in fact a mistake in this board.  On the bottom there was an overlapping wire that I had to cut at two points and solder some scrap wire across the board to replace that wire.  This wire covered up the RGB port on the PCB.  Additionally, the microphone port on the board was wired backwards because the part in Fritzing was incorrect.
<img src="/PechaKucha/GoodPictures/IMG_1671.jpg">
* **11 board plugged into motors:** Here is a picture of my project with the third revision of my board.  I used a breadboard when testing at this stage because the microphone was backwards.  I didn't solder any additional parts to this board because I knew I needed to order a replacement because the servos were still acting strange.  I also did some GPIO pin testing in this stage, as I had connected a yellow button that would make my Photon tweet when pressed.
<img src="/PechaKucha/GoodPictures/IMG_1767.jpg">
* **12 breadboarding:** I soon had the idea to incorporate another microcontroller board into my project.  I needed another board to control the servos and RGB lights on my product, as the Photon struggled to do it on its own.  I chose the Arduino Nano, an inexpensive board with many more pins.  In this picture I am working on getting serial communication set up so that my Photon would be able give commands to the Nano over a wire.
<img src="/PechaKucha/GoodPictures/IMG_1770.jpg">
* **13 board v4.0:** Here is a picture of my final PCB that came in February.   I decided to make my board longer so that it could have an additional micro-controller board, an Arduino nano, to control the motors and lights in my product.  This board does not have any errors because I checked my design many times before ordering it.
<img src="/PechaKucha/GoodPictures/IMG_1775.jpg">
* **14 board and components:** Assembling my boards wasn't very difficult.  I just had to put the components in the holes in my PCB  and solder them in.  I took this picture of my board and components right before assembling my product.
<img src="/PechaKucha/GoodPictures/IMG_1800.jpg">
* **15 assembled board:** Here is a close up of my assembled product.  All of the basic components in the previous image have been soldered onto the board.  I have soldered on the microphone, buzzer, photoresistor, LED, and RGB button board.  I have also plugged in the servos and inserted my Photon and Arduino Nano.  That nasty hot glue mess you see is my attempt at creating a power connector for my product.
<img src="/PechaKucha/GoodPictures/IMG_1813.jpg">
* **16 top view of board:** I was intending for my product to be powered by a single USB port, so it could be powered by any computer or portable USB charger.  However the amount of power required for my product to function exceeds five volts, the output of normal usb ports.  Because of this, my DIY hot glued USB port was for nothing, as I have to use two USB ports to provide enough power for my project to run.
<img src="/PechaKucha/GoodPictures/IMG_1814.png">
* **17 App:** On my website I created a simple app for controlling my product.  The app uses Javascript to access the Particle API to call cloud functions registered on my product and monitor cloud variables like how bright or much noise is being detected.  The sliders change the positions of the servos, change the colour of the RGB, and can adjust the frequency being played on the buzzer.
* **18:**
* **19 / Evaluation of Project:**


# Rubric

<table border="1" cellpadding="0" cellspacing="0" style="font-size:13.3333px;margin-left:27pt;border-collapse:collapse;border:none" width="545">
<tbody>
<tr style="height:13.8pt">
<td colspan="5" style="padding:5pt;width:545pt;border:1pt solid black;height:13.8pt;background:rgb(183,183,183)" valign="top" width="545">
<p align="center" style="text-align:center;line-height:normal"><b><span lang="EN-US">Part I: Pecha Kucha</span></b></p>
</td>
</tr>
<tr style="height:13.8pt">
<td style="padding:5pt;width:45.5pt;border-style:none solid solid;border-right-color:black;border-bottom-color:black;border-left-color:black;border-right-width:1pt;border-bottom-width:1pt;border-left-width:1pt;height:13.8pt;background:rgb(183,183,183)" valign="top" width="46">
<p align="center" style="text-align:center;line-height:normal"><span lang="EN-US">&nbsp;</span></p>
</td>
<td style="padding:0in 5.4pt;width:124.85pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:13.8pt;background:rgb(183,183,183)" valign="top" width="125">
<p align="center" style="text-align:center;line-height:normal"><b><span lang="EN-US" style="font-size:10pt">1-2</span></b></p>
</td>
<td style="padding:0in 5.4pt;width:124.9pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:13.8pt;background:rgb(183,183,183)" valign="top" width="125">
<p align="center" style="text-align:center;line-height:normal"><b><span lang="EN-US" style="font-size:10pt">2-3</span></b></p>
</td>
<td style="padding:0in 5.4pt;width:124.85pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:13.8pt;background:rgb(183,183,183)" valign="top" width="125">
<p align="center" style="text-align:center;line-height:normal"><b><span lang="EN-US" style="font-size:10pt">4-5</span></b></p>
</td>
<td style="padding:0in 5.4pt;width:124.9pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:13.8pt;background:rgb(183,183,183)" valign="top" width="125">
<p align="center" style="text-align:center;line-height:normal"><b><span lang="EN-US" style="font-size:10pt">6-7</span></b></p>
</td>
</tr>
<tr style="height:0.85in">
<td style="padding:2pt;width:45.5pt;border-style:none solid solid;border-right-color:black;border-bottom-color:black;border-left-color:black;border-right-width:1pt;border-bottom-width:1pt;border-left-width:1pt;height:0.85in" valign="top" width="46">
<p align="center" style="margin:0in 5.65pt 0.0001pt;text-align:center;line-height:normal"><b><span lang="EN-US">Basics</span></b></p>
</td>
<td style="padding:0in 5.4pt;width:124.85pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:0.85in" valign="top" width="125">
<p style="line-height:normal"><span lang="EN-US" style="font-size:9pt">The presentation does not loop to have 20 slides timed to advance every 20 seconds, OR the presentation has major technical flaws.</span></p>
</td>
<td style="padding:0in 5.4pt;width:124.9pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:0.85in" valign="top" width="125">
<p style="line-height:normal"><span lang="EN-US" style="font-size:9pt">The presentation has a loop of 20 slides timed to advance every 20 seconds, but the presentation has several minor technical flaws.&nbsp;<br>
</span></p>
</td>
<td style="padding:0in 5.4pt;width:124.85pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:0.85in" valign="top" width="125">
<p style="line-height:normal"><span lang="EN-US" style="font-size:9pt">The presentation has a loop of 20 slides timed to advance every 20 seconds. The presentation runs with occasional minor flaws.&nbsp;<br>
</span></p>
</td>
<td style="padding:0in 5.4pt;width:124.9pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:0.85in" valign="top" width="125">
<p style="line-height:normal"><span lang="EN-US" style="font-size:9pt">The presentation has a loop of 20 slides timed to advance every 20 seconds. The presentation runs flawlessly (technology-wise).&nbsp;<br>
</span></p>
</td>
</tr>
<tr style="height:82.25pt">
<td style="padding:2pt;width:45.5pt;border-style:none solid solid;border-right-color:black;border-bottom-color:black;border-left-color:black;border-right-width:1pt;border-bottom-width:1pt;border-left-width:1pt;height:82.25pt" valign="top" width="46">
<p align="center" style="margin:0in 5.65pt 0.0001pt;text-align:center;line-height:normal"><b><span lang="EN-US" style="font-size:10pt">Preparation &amp;</span></b></p>
<p align="center" style="margin:0in 5.65pt 0.0001pt;text-align:center;line-height:normal"><b><span lang="EN-US" style="font-size:10pt">Presentation</span></b></p>
<p align="center" style="margin:0in 5.65pt 0.0001pt;text-align:center;line-height:normal"><b><span lang="EN-US" style="font-size:10pt">of Script</span></b></p>
<p align="center" style="margin:0in 5.65pt 0.0001pt;text-align:center;line-height:normal"><span lang="EN-US">&nbsp;</span></p>
</td>
<td style="padding:0in 5.4pt;width:124.85pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:82.25pt" valign="top" width="125">
<p style="line-height:normal"><span lang="EN-US" style="font-size:9pt;color:black">It appears that the presenter&nbsp;</span><br>
<span lang="EN-US" style="font-size:9pt;color:black">did not prepare a script or did not rehearse, OR demonstrated minimal&nbsp;</span><br>
<span lang="EN-US" style="font-size:9pt;color:black">knowledge of the subject matter, OR frequently read off notes to audience.</span></p>
</td>
<td style="padding:0in 5.4pt;width:124.9pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:82.25pt" valign="top" width="125">
<p style="line-height:normal"><span lang="EN-US" style="font-size:9pt;color:black">It appears the presenter prepared a mediocre script or was not adequately</span><span lang="EN-US" style="font-size:9pt;color:black">&nbsp;rehearsed, or demonstrated&nbsp;</span><br>
<span lang="EN-US" style="font-size:9pt;color:black">marginal knowledge of the subject matter, and occasionally read off notes to the audience.</span></p>
</td>
<td style="padding:0in 5.4pt;width:124.85pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:82.25pt" valign="top" width="125">
<p style="line-height:normal"><span lang="EN-US" style="font-size:9pt;color:black">The presenter obviously prepared a script, rehearsed, demonstrated&nbsp;</span><span style="color:rgb(0,0,0);font-size:12px;background-color:transparent">strong knowledge of the subject matter, and did not read off notes to&nbsp;</span>audience<span style="color:rgb(0,0,0);font-size:12px;background-color:transparent">.</span></p>
</td>
<td style="padding:0in 5.4pt;width:124.9pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:82.25pt" valign="top" width="125">
<p style="line-height:normal"><span lang="EN-US" style="font-size:9pt;color:black">The presenter obviously prepared a compelling script, rehearsed,<br>
</span><span style="color:rgb(0,0,0);font-size:12px;background-color:transparent">demonstrated superior knowledge of the subject matter, and did not read off notes to&nbsp;</span>audience<span style="color:rgb(0,0,0);font-size:12px;background-color:transparent">.</span></p>
</td>
</tr>
<tr style="height:56.7pt">
<td style="padding:2pt;width:45.5pt;border-style:none solid solid;border-right-color:black;border-bottom-color:black;border-left-color:black;border-right-width:1pt;border-bottom-width:1pt;border-left-width:1pt;height:56.7pt" valign="top" width="46">
<p style="margin:0in 5.65pt 0.0001pt;line-height:normal"><b><span lang="EN-US" style="font-size:10pt">Organization</span></b></p>
</td>
<td style="padding:0in 5.4pt;width:124.85pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:56.7pt" valign="top" width="125">
<p style="line-height:normal"><span lang="EN-US" style="font-size:9pt">The Pecha Kucha was unorganized and difficult to follow. Ideas and images were put together with little thought to audience understanding.</span></p>
</td>
<td style="padding:0in 5.4pt;width:124.9pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:56.7pt" valign="top" width="125">
<p style="line-height:normal"><span lang="EN-US" style="font-size:9pt">The Pecha Kucha was poorly organized and not easy to follow. Ideas and images were put together in a way that made comprehension difficult.</span></p>
</td>
<td style="padding:0in 5.4pt;width:124.85pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:56.7pt" valign="top" width="125">
<p style="line-height:normal"><span lang="EN-US" style="font-size:9pt">The Pecha Kucha was fairly organized and the ideas flowed well. There were perhaps jumps and transitions that were not entirely seamless. Easily understood.</span></p>
</td>
<td style="padding:0in 5.4pt;width:124.9pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:56.7pt" valign="top" width="125">
<p style="line-height:normal"><span lang="EN-US" style="font-size:9pt">The Pecha Kucha was extremely organized.&nbsp; The ideas and images flowed in a manner that was easy to follow and understand. The material transitioned seamlessly from slide to slide.</span></p>
</td>
</tr>
<tr style="height:56.7pt">
<td style="padding:2pt;width:45.5pt;border-style:none solid solid;border-right-color:black;border-bottom-color:black;border-left-color:black;border-right-width:1pt;border-bottom-width:1pt;border-left-width:1pt;height:56.7pt" valign="top" width="46">
<p style="text-align:center;margin:0in 5.65pt 0.0001pt;line-height:normal"><b><span lang="EN-US" style="font-size:10pt">Visual Appeal</span></b></p>
<p align="center" style="margin:0in 5.65pt 0.0001pt;text-align:center;line-height:normal"><b><span lang="EN-US" style="font-size:10pt">and Creativity</span></b></p>
</td>
<td style="padding:0in 5.4pt;width:124.85pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:56.7pt" valign="top" width="125">
<p style="line-height:normal"><span lang="EN-US" style="font-size:9pt">Visual images/text are poorly chosen or too few in number. OR the quality of the images is not legible, OR used a particularly garnish or distracting visual design for the presentation.</span></p>
</td>
<td style="padding:0in 5.4pt;width:124.9pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:56.7pt" valign="top" width="125">
<p style="line-height:normal"><span lang="EN-US" style="font-size:9pt">The presenter has used adequate quality visual images, but does not use a creative or interesting visual design for the presentation.&nbsp; The images/text chosen distract from the presentation.</span></p>
</td>
<td style="padding:0in 5.4pt;width:124.85pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:56.7pt" valign="top" width="125">
<p style="line-height:normal"><span lang="EN-US" style="font-size:9pt">The images/text chosen were appropriate and depict the material. The presenter has used good quality visual images and has used a creative/ interesting visual design for the presentation.&nbsp;</span></p>
</td>
<td style="padding:0in 5.4pt;width:124.9pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:56.7pt" valign="top" width="125">
<p style="line-height:normal"><span lang="EN-US" style="font-size:9pt">The images/text chosen were appropriate and extremely thoughtful to the topic and conveyed in an excellent manner the Pecha Kucha's purpose. The audience was informed and entertained.</span></p>
</td>
</tr>
<tr style="height:56.7pt">
<td style="padding:2pt;width:45.5pt;border-style:none solid solid;border-right-color:black;border-bottom-color:black;border-left-color:black;border-right-width:1pt;border-bottom-width:1pt;border-left-width:1pt;height:56.7pt" valign="top" width="46">
<p align="center" style="margin:0in 5.65pt 0.0001pt;text-align:center;line-height:normal"><b><span lang="EN-US" style="font-size:10pt">Spelling/ Grammar</span></b></p>
<p align="center" style="margin:0in 5.65pt 0.0001pt;text-align:center;line-height:normal"><span lang="EN-US" style="font-size:8pt;color:rgb(67,67,67)">(If applicable)</span></p>
</td>
<td style="padding:0in 5.4pt;width:124.85pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:56.7pt" valign="top" width="125">
<p style="line-height:normal"><span lang="EN-US" style="font-size:9pt">Presentation has more than 2 spelling and/or grammatical errors</span></p>
</td>
<td style="padding:0in 5.4pt;width:124.9pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:56.7pt" valign="top" width="125">
<p style="line-height:normal"><span lang="EN-US" style="font-size:9pt">Presentation has 2 misspellings and/or&nbsp; &nbsp;grammatical errors</span></p>
</td>
<td style="padding:0in 5.4pt;width:124.85pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:56.7pt" valign="top" width="125">
<p style="line-height:normal"><span lang="EN-US" style="font-size:9pt">Presentation has 1 misspelling or grammatical error</span></p>
</td>
<td style="padding:0in 5.4pt;width:124.9pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:56.7pt" valign="top" width="125">
<p style="line-height:normal"><span lang="EN-US" style="font-size:9pt">Presentation has no misspellings or grammatical errors</span></p>
</td>
</tr>
<tr style="height:56.7pt">
<td style="padding:2pt;width:45.5pt;border-style:none solid solid;border-right-color:black;border-bottom-color:black;border-left-color:black;border-right-width:1pt;border-bottom-width:1pt;border-left-width:1pt;height:56.7pt" valign="top" width="46">
<p align="center" style="margin:0in 5.65pt 0.0001pt;text-align:center;line-height:normal"><b><span lang="EN-US" style="font-size:10pt">Presentation Skills</span></b></p>
</td>
<td style="padding:0in 5.4pt;width:124.85pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:56.7pt" valign="top" width="125">
<p style="line-height:normal"><span lang="EN-US" style="font-size:9pt">Demonstrated weak presentation skills (pace/tone/volume, confidence/poise, gestures</span><span style="font-size:12px;background-color:transparent">, if applicable</span><span style="font-size:9pt;background-color:transparent">).</span></p>
</td>
<td style="padding:0in 5.4pt;width:124.9pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:56.7pt" valign="top" width="125">
<p style="line-height:normal"><span lang="EN-US" style="font-size:9pt">Demonstrated fair presentation skills (pace/tone/volume, confidence/poise, gestures</span><span style="font-size:12px;background-color:transparent">, if applicable</span><span style="font-size:9pt;background-color:transparent">).</span></p>
</td>
<td style="padding:0in 5.4pt;width:124.85pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:56.7pt" valign="top" width="125">
<p style="line-height:normal"><span lang="EN-US" style="font-size:9pt">Demonstrated sound</span><span lang="EN-US" style="font-size:9pt;font-family:MS Mincho"> </span><span lang="EN-US" style="font-size:9pt">presentation skills (pace/tone/volume, confidence/poise, gestures</span><span style="font-size:12px;background-color:transparent">, if applicable</span><span style="font-size:9pt;background-color:transparent">).</span></p>
</td>
<td style="padding:0in 5.4pt;width:124.9pt;border-style:none solid solid none;border-bottom-color:black;border-bottom-width:1pt;border-right-color:black;border-right-width:1pt;height:56.7pt" valign="top" width="125">
<p style="line-height:normal"><span lang="EN-US" style="font-size:9pt">Demonstrated outstanding presentation skills (pace/tone/volume, confidence/poise, gestures, if applicable)</span></p>
</td>
</tr>
</tbody>
</table>
