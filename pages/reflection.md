---
layout: app
title: Reflection
permalink: /reflection/
---

Abstract:
---
The Internet of Things is a new concept that is taking the world by force.  There will soon be more internet connected devices than there are people on this planet.  The Internet of Things, commonly referred to as IoT, is the name of the network of these internet connected devices.  The purpose of these devices is to use electronics, sensors, software and internet connectivity to collect, exchange, and act on data.  IoT devices fit into many fields and industries, as almost any electronic device can benefit from being internet-enabled.  Creating and using IoT devices have become more accessible thanks to today's technology.

The most critical part of any electronic product is a micro-controller.  Micro-controllers are relatively inexpensive electronic components that can be programmed to interact with circuits and obtain data from sensors, and are key for creating any find of electronic device.  In order for the product to be considered and IoT device, the micro-controller must be connected to the internet via a type of antenna.  This antenna can either be Bluetooth, Wi-Fi, or Cellular, as long as it can perform its function of connecting the device.

For my Personal Project I created a IoT product using two micro-controllers, a Particle Photon and an Arduino Nano.  The Photon has Wi-Fi, and can be interacted and monitored with the app I created.  The Nano is controlled by the Photon over Serial, and can be given commands to control the servo motors and RGB LED connected to my custom printed circuit board.  Both the Photon and Nano run C++, and the app is written Javascript.

Reflection:
---
For my Personal Project I created a cloud connected, wi-fi enabled Internet of Things device that uses a Particle Photon and Arduino Nano, two micro-controller boards, in conjunction with my app that I created to control and monitor motors, lights, a buzzer, and sensors over the internet. I created my project because I have been interested in electronics and the Internet of Things for the past two years.  Last year I bought several wi-fi enabled micro-controller boards from Particle and begun to use them to create simple devices that only had one purpose at a time.  This year I built a device that has many functions and serves multiple purposes for my personal project.

When the Grade 10 project officially began I decided I would have to make my project a bit different from the others.  I had already been using GitHub, a code sharing website that allows you to manage projects in special folders called repositories, to host my PCB designs and project planning documents, so I decided I would also create a repository for my project website because I am not fond of Google Sites's limited interface.  My website is powered by Jekyll, a program written in Ruby, that converts plaintext files written with Markdown formatting into sophisticated HTML files on the fly, meaning that I can spend more time writing content on my website than writing HTML code.  I also chose to use GitHub to host my three repositories related to my project because GitHub is more accessible and manageable than services like Google Drive or Dropbox.  I can access any of my files from any computer using the GitHub web interface or the terminal, and all of my files are organized in my repositories.  GitHub also has many integrations for repositories.  I test my repositories with Travis CI, a free service that can run tests for projects written in various programming languages.

I created my own PCB (printed circuit board) for my product in order to organize all of the different components in my product onto one board and so I would not have to use a breadboard in my final design.  I chose to design my PCB with a free app called Fritzing.  I originally tried to control all of the components with a Photon, but this did not work, as the Photon did not have enough pins to control all of the components on my board.  I realized this after the I made the third version of my board.  I was using three servo motors and an RGB, which require special pins that use Pulse Width Modulation, and Photons do not have six *usable* PWM pins.  I decided to incorporate another micro-controller board into my product to control the servos and RGB light of my product.  I decided to use the Arduino Nano because it is very similar to a Photon in size, but runs at five volt logic and has plenty of pins, meaning that it would work with my servos and RGB light.  In my fourth version of my board I added the Nano and rewired the servos and RGB to the it.  I bought a Nano on Amazon after ordering my board and I tested it with my Photon.  I was able to easily modify the code for my Photon for it to give commands to the Nano using Serial, a simple interface that uses a single wire for direct communication between micro-controllers. It was more difficult to program the Nano side of the wire.  I had to find a good way for the Nano to read a message received as a string of characters, save it as a string and parse it as a command.  Luckily, I was able to find a way make the Photon send simple commands like `rgb 255 000 000`. This command tells the Nano to turn on the red to maximum brightness and turn off the green and blue.  I had to make a function on the Photon that would always turn integers into three digit strings so that the position of the numbers in commands would always be the same.

I learned many things during my project.  Most importantly I learned the value of learning from mistakes.  Most of the mistakes I made during my project were with my PCB.  I had to design seven versions of my PCB, ordering five of them throughout my project.  With each board that had a mistake I found out why it wasn't working the way I intended, and I corrected the mistake in my design and prepared to order the next version.  My first board that I ordered was the worst.  It had a misplaced connection that made an unwanted connection between 3 volts and ground on the Photon, and I had to immediately order a replacement board.  The second board still had many mistakes, including incorrect pins.  The third board still had many errors, including PWM conflicts.  The fourth board fixed PWM conflicts, but the Photon still could not power all of the components of my product.  The fifth and final board that I ordered included an Arduino Nano and solved all of the problems I'd had with my previous boards.

In conclusion, I am satisfied with the outcome of my project.  I created a IoT device that works well.  It can be controlled using the app that I created to control motors, lights and a buzzer.  My app can also get data from the Photon, allowing it to monitor the amount of light being detected by the photoresistor or how much sound is being read from the microphone.  I improved my programming abilities during my project, as creating my app allowed me to improve my Javascript skills, and programming my Photon and Nano helped me teach myself C++.


















Script:
-----
Hi.  I'm Nathan Robinson.  My project is a demonstration of the practical uses of the Internet of Things and how it can be used effectively.

I decided to make an Internet of Things device to investigate the process of creating and programming an internet enabled product.  I'm very interested in technology and I love creating devices, so I decided to research how a cloud connected device could be created and if it could be a useful product.

The Internet of Things is the network of physical objects embedded with electronics, software, sensors, and network connectivity that enables them to collect and exchange data.  Put simply, connecting sensors and other components to an internet enabled microcontroller board opens up an entire new use for those components, as they can then be interfaced from anywhere in the world.

This is the Core.  A wifi-enabled micro-controller board the size of a postage stamp.  Particle, the producer of the board is an awesome company that I have been a fan of since I backed them on Kickstarter.  I received my core in 2013 but I didn't actually begin to use it until early 2014.

In this picture, my Core has two buttons hooked up to it.  This simple circuit allowed me to post two different tweets to Twitter whenever I pressed one of the buttons.  This little project allowed me to make use of the Twitter API to send data directly from the core to Twitter.

> In the background, you can see another breadboard with a temperature sensor attached to it.  The Core would read the temperature from the sensor and report it to Twitter.

In late 2014, Particle released a new IoT board.  It was called the Photon and it included many improvements including faster wi-fi, more storage and a cheaper price.  I pre-ordered a few, and waited months for them to arrive.  Eventually in July of 2015, my Photons came and I officially started my project.

I wanted to create a PCB for my product to keep it held together and to look well made.  I decided to use Fritzing, a free program that allows you design PCBs by dragging and connecting components together on virtual board.  Here is the first board that I designed and ordered.  I immediately noticed that it was faulty because I had an error in my design, and I did not assemble it when it arrived.

The second version of the board featured three servo motors, an RGB, a microphone, two buttons, a buzzer and a GPIO header.  However there was a conflict with the pins, as the RGB was not connected to PWM pins on the Photon, meaning that the brightness of the LEDs could not be changed dynamically.  Also the servos did not function because there was not enough power on the Photon to drive three motors.

The PCB fabrication house that I had been ordering my boards from only sold boards in multiples of three, so I had to buy three times as many boards as I needed.  The fabrication house was in America, which meant two things.  It took weeks to ship and the shipping cost more than the boards.

> This is a picture of my workbench in my garage.  I assembled most of my product in there as it was the only suitable location for soldering.

After fixing many of my mistakes with my last board, I quickly ordered a replacement.  This new board corrected the mistakes I had with my previous boards, but it still was not perfect, as the motors did not function properly when the RGB was in use because of a limitation of the Photon.  The are two pairs of PWM pins that share the same clock, meaning that they can not both be used as PWM outputs at the same time.

In this third revision of the board, the RGB, the buzzer, the GPIO and the buttons worked.  The servos were non-functional, despite the fact that this update was supposed to fix them.  I also found a new fabrication house based in the UK that offered pretty fair prices and didn't require me to buy my board in multiples of three.

> This board was the last to have the same profile as the previous boards.

There was in fact a mistake with this board.  On the bottom there was an overlapping wire that I had to cut at two points and solder some scrap wire across the board to correct.  This wire covered up the RGB port on the PCB.  Additionally, the microphone port on the board was wired backwards because the part in Fritzing was incorrect.

> I soon began to correct my board in Fritzing.

Here is a picture of my project with the third revision of my board.  I used a breadboard when testing at this stage because the microphone was backwards.  I didn't solder any additional parts to this board because I knew I needed to order a replacement because the servos were still acting strange.  I also did some GPIO pin testing in this stage, as I had connected a yellow button that would make my Photon tweet when pressed.

I soon had the idea to incorporate another microcontroller board into my project.  I needed another board to control the servos and RGB lights on my product, as the Photon struggled to do it on its own.  I chose the Arduino Nano, an inexpensive board with many more pins.  In this picture I am working on getting serial communication set up so that my Photon would be able give commands to the Nano over a wire.

Here is a picture of my final PCB that came in February.  I had to make my board longer so that it could hold an Arduino Nano to control the motors and lights in my product.  This board does not have any errors because I checked my design in Fritzing many times before ordering it.  The board is very high quality and is orange because the UK based fabrication house uses orange for its PCBs.

Assembling my boards wasn't very difficult, and assembling my last board was the most fun.  I just had to put the components in the holes of my PCB and solder them in.  I took this picture of my board and its components right before assembling my product.  My soldering skills have improved greatly throughout my project and so has my patience with creating things.

> I took extra care to make sure that my fourth edition of my board was assembled well.

Here is a close up of my assembled product.  All of the basic components in the previous image have been soldered onto the board, and I have soldered on the microphone, buzzer, photoresistor, LED, and RGB button board onto my product, and I have also plugged in the servos and inserted my Photon and Arduino Nano.  That nasty hot glue mess you see is my attempt at creating a power connector for my product.

I was intending for my product to be powered by a single USB port, so it could be powered by any computer or portable USB charger.  However the amount of power required for my product to function exceeds five volts, the output of normal USB ports.  Because of this, my DIY hot glued USB port was for nothing, as I still have to use two ports to provide enough power for my project to run.

On my website I created a simple app for controlling my product.  The app uses Javascript to access the Particle API to call cloud functions registered on my product and monitor cloud variables like how much light or much noise is being detected.  The sliders change the positions of the servos, change the colours on the RGB, and can adjust the frequency being played on the buzzer.

> My app can be used to quickly monitor and control my product.

Overall, I think that my project was successful, as I created an internet connected product using a Particle Photon that can be used to collect data and perform tasks.  I also created a web app in Javascript for easily controlling my product.  Most importantly, all of my files and code can be found on GitHub so that other people can replicate my project.

> Thank you for watching, I hope you found my project interesting.
