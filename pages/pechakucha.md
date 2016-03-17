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
* **Rationale For Project:** I decided to make an Internet of Things device because I am very interested in technology and how it can be used in everyday life.  I also love to make electronic projects and program all kinds of devices, and would like to study computer science at university and get a job as a developer.
* **1 IoT Diagram:** "What is the Internet of Things?" you may ask.  The Internet of Things, commonly referred to IoT, is the concept that the numerous internet connected devices in the world can co-operate together autonomously to improve our lives as a whole.
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
* **11 board plugged into motors:** Here is a picture of my project with the 3.0 board.  I had to use a bread board because the microphone was backwards and because I didn't want to have to solder any additional parts to this board because I knew I needed to order a replacement.
<img src="/PechaKucha/GoodPictures/IMG_1770.jpg">
* **12 board v4.0:** Here is a picture of my final PCB that came in February.   I decided to make my board longer so that it could have an additional micro-controller board, an Arduino nano, to control the motors and lights in my product.  This board does not have any errors because I checked my design many times before ordering it.
<img src="/PechaKucha/GoodPictures/IMG_1775.jpg">
* **13 board and components:** Assembling my boards wasn't very difficult.  I just had to put the components in the holes in my PCB  and solder them in.  I took this picture of my board and components right before assembling my product.
<img src="/PechaKucha/GoodPictures/IMG_1799.jpg">
* **14:**

* **15:**
* **16:**
* **17:**
* **18 / Evaluation of Project:**
