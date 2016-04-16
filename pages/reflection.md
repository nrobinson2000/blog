---
layout: app
title: Reflection
permalink: /reflection/
---

Reflection:
-----
Hi.  I'm Nathan Robinson.  My project is a demonstration of the practical uses of the Internet of Things and how it can be used effectively.

I decided to make an Internet of Things device to investigate the process of creating and programming an internet enabled product.  I'm very interested in technology and I love creating devices, so I decided to research how a cloud connected device could be created and if it could be a useful product.

The Internet of Things is the network of physical objects embedded with electronics, software, sensors, and network connectivity that enables them to collect and exchange data.  Put simply, connecting sensors and other components to an internet enabled microcontroller board opens up an entire new use for those components, as they can then be interfaced from anywhere in the world.

This is the Core.  A wifi-enabled micro-controller board the size of a postage stamp.  Particle, the producer of the board is an awesome company that I have been a fan of since I backed them on Kickstarter.  I received my core in 2013 but I didn't actually begin to use it until early 2014.

In this picture, my Core has two buttons hooked up to it.  This simple circuit allowed me to post two different tweets to Twitter whenever I pressed one of the buttons.  This little project allowed me to make use of the Twitter API to send data directly from the core to Twitter.

In late 2014, Particle released a new IoT board.  It was called the Photon and it included many improvements including faster wi-fi, more storage and a cheaper price.  I pre-ordered a few, and waited months for them to arrive.  Eventually in July of 2015, my Photons came and I officially started my project.

I wanted to create a PCB for my product to keep it held together and to look well made.  I decided to use Fritzing, a free program that allows you design PCBs by dragging and connecting components together on virtual board.  Here is the first board that I designed and ordered.  I immediately noticed that it was faulty because I had an error in my design, and I did not assemble it when it arrived.

The second version of the board featured three servo motors, an RGB, a microphone, two buttons, a buzzer and a GPIO header.  However there was a conflict with the pins, as the RGB was not connected to PWM pins on the Photon, meaning that the brightness of the LEDs could not be changed dynamically.  Also the servos did not function because there was not enough power on the Photon to drive three motors.

The PCB fabrication house that I had been ordering my boards from only sold boards in multiples of three, so I had to buy three times as many boards as I needed.  The fabrication house was in America, which meant two things.  It took weeks to ship and the shipping cost more than the boards.

After fixing many of my mistakes with my last board, I quickly ordered a replacement.  This new board corrected the mistakes I had with my previous boards, but it still was not perfect, as the motors did not function properly when the RGB was in use because of a limitation of the Photon.  The are two pairs of PWM pins that share the same clock, meaning that they can not both be used as PWM outputs at the same time.

In this third revision of the board, the RGB, the buzzer, the GPIO and the buttons worked.  The servos were non-functional, despite the fact that this update was supposed to fix them.  I also found a new fabrication house based in the UK that offered pretty fair prices and didn't require me to buy my board in multiples of three.

There was in fact a mistake with this board.  On the bottom there was an overlapping wire that I had to cut at two points and solder some scrap wire across the board to correct.  This wire covered up the RGB port on the PCB.  Additionally, the microphone port on the board was wired backwards because the part in Fritzing was incorrect.

Here is a picture of my project with the third revision of my board.  I used a breadboard when testing at this stage because the microphone was backwards.  I didn't solder any additional parts to this board because I knew I needed to order a replacement because the servos were still acting strange.  I also did some GPIO pin testing in this stage, as I had connected a yellow button that would make my Photon tweet when pressed.

I soon had the idea to incorporate another microcontroller board into my project.  I needed another board to control the servos and RGB lights on my product, as the Photon struggled to do it on its own.  I chose the Arduino Nano, an inexpensive board with many more pins.  In this picture I am working on getting serial communication set up so that my Photon would be able give commands to the Nano over a wire.

Here is a picture of my final PCB that came in February.  I had to make my board longer so that it could hold an Arduino Nano to control the motors and lights in my product.  This board does not have any errors because I checked my design in Fritzing many times before ordering it.  The board is very high quality and is orange because the UK based fabrication house uses orange for its PCBs.

Assembling my boards wasn't very difficult, and assembling my last board was the most fun.  I just had to put the components in the holes of my PCB and solder them in.  I took this picture of my board and its components right before assembling my product.  My soldering skills have improved greatly throughout my project and so has my patience with creating things.

Here is a close up of my assembled product.  All of the basic components in the previous image have been soldered onto the board, and I have soldered on the microphone, buzzer, photoresistor, LED, and RGB button board onto my product, and I have also plugged in the servos and inserted my Photon and Arduino Nano.  That nasty hot glue mess you see is my attempt at creating a power connector for my product.

I was intending for my product to be powered by a single USB port, so it could be powered by any computer or portable USB charger.  However the amount of power required for my product to function exceeds five volts, the output of normal USB ports.  Because of this, my DIY hot glued USB port was for nothing, as I still have to use two ports to provide enough power for my project to run.

On my website I created a simple app for controlling my product.  The app uses Javascript to access the Particle API to call cloud functions registered on my product and monitor cloud variables like how much light or much noise is being detected.  The sliders change the positions of the servos, change the colours on the RGB, and can adjust the frequency being played on the buzzer.

Overall, I think that my project was successful, as I created an internet connected product using a Particle Photon that can be used to collect data and perform tasks.  I also created a web app in Javascript for easily controlling my product.  Most importantly, all of my files and code can be found on GitHub so that other people can replicate my project.
