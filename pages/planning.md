---
layout: post
title: Planning
permalink: /planning/
---

<img src="/PechaKucha/GoodPictures/IMG_0004.jpg">
**2 Picture of Core:** This is the Core.  A wifi-enabled micro-controller board the size of a postage stamp.  Particle, the producer of the board is an awesome company that I have been a fan of since I backed them on Kickstarter.  I received the my core in 2013 but didn't actually begin to use it until early 2014.
<img src="/PechaKucha/GoodPictures/IMG_0055.jpg">
**3 Picture of Core circuit:** In this picture, my Core has two buttons hooked up to it.  This simple circuit allowed me to post a tweet whenever I pressed one of the buttons.  This little project allowed me to make use of API's to sent data directly from the core to Twitter.
<img src="/PechaKucha/GoodPictures/IMG_1439.jpg">
**4 Picture of photon:** In late 2014 Particle developed a new IoT board.  It was called the Photon and included many upgrades including faster wi-fi, more storage and a cheaper price.  I pre-ordered a few, and waited months for them to arrive.  Eventually in July 2015, my Photons came and I officially started my project.
<img src="/PechaKucha/GoodPictures/IMG_1471.jpg">
**5 First ed. pcb:** I wanted to create a PCB for my product to hold it all to together and for it to look well made.  I decided to use Fritzing, a free to use program that allows you design PCBs by dragging and connecting components together on virtual PCB.  Here is the first board that I actually paid to have made.  I immediately noticed that the it was faulty because I had an error in my design.
<img src="/PechaKucha/GoodPictures/IMG_1475.jpg">
**6 1.5.0 pcb:** I actually bothered to assemble this version of the board, as I couldn't immediately spot any flaws with it.  The board featured three servo motor ports, an RGB port, a microphone port, two button ports, a buzzer port and a GPIO header.  However there was a conflict with the pins, as the RGB was not connected to PWM pins on the Photon, meaning that the brightness of the LEDs could not be changed dynamically.  Also the servos did not function.  I didn't know it yet, but this was because there was not enough power on the Photon to drive three motors.
<img src="/PechaKucha/GoodPictures/IMG_1490.jpg">
**7 three boards in tins:** Side note, the PCB fabrication house that I had been ordering my boards from only sold boards in multiples of three, so I had to buy three times as many boards as I needed.  The fabrication house was in America, which meant two things.  It took weeks to ship and the shipping cost more than the boards.
<img src="/PechaKucha/GoodPictures/IMG_1527.jpg">
**8 board v2.0:**  After fixing many of my mistakes with my last board, I quickly ordered a replacement.  This new board corrected the mistakes I had with my previous boards, but it still was not perfect, as the motors did not function properly when the RGB was in use because of a limitation of the Photon.  The are two pairs of PWM pins that share the same clock, meaning that they can not both be used as PWM outputs at the same time.
<img src="/PechaKucha/GoodPictures/IMG_1634.jpg">
**9 3.0 board:** In this third revision of the board, the RGB and buzzer worked, the GPIO worked and the buttons worked.  The servos were non-functional, despite the fact that this update was supposed to fix the servos.  I also found a new fabrication house based in the UK that offered pretty fair prices and didn't require me to buy my board in multiples of three.  I assembled this board in November.
<img src="/PechaKucha/GoodPictures/IMG_1667.jpg">
**10 underside of board:** There was in fact a mistake in this board.  On the bottom there was an overlapping wire that I had to cut at two points and solder some scrap wire across the board to replace that wire.  This wire covered up the RGB port on the PCB.  Additionally, the microphone port on the board was wired backwards because the part in Fritzing was incorrect.
<img src="/PechaKucha/GoodPictures/IMG_1671.jpg">
**11 board plugged into motors:** Here is a picture of my project with the 3.0 board.  I had to use a bread board because the microphone was backwards and because I didn't want to have to solder any additional parts to this board because I knew I needed to order a replacement.
<img src="/PechaKucha/GoodPictures/IMG_1767.jpg">
**12 breadboarding:** Here is the breadboard prototype of my board.
<img src="/PechaKucha/GoodPictures/IMG_1770.jpg">
**13 board v4.0:** Here is a picture of my final PCB that came in February.   I decided to make my board longer so that it could have an additional micro-controller board, an Arduino nano, to control the motors and lights in my product.  This board does not have any errors because I checked my design many times before ordering it.
<img src="/PechaKucha/GoodPictures/IMG_1775.jpg">
**14 board and components:** Assembling my boards wasn't very difficult.  I just had to put the components in the holes in my PCB  and solder them in.  I took this picture of my board and components right before assembling my product.
<img src="/PechaKucha/GoodPictures/IMG_1799.jpg">


# Put stuff

<div><br>
<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px">
<tbody>
<tr>
<td style="text-align:center;width:160px;height:19px"><b style="line-height:1.6;font-size:10pt"><span style="background-color:rgb(255,255,255)">&nbsp;0-1</span></b></td>
<td style="text-align:center;width:160px;height:19px"><b style="line-height:1.6;font-size:10pt;background-color:transparent">&nbsp;2-3</b></td>
<td style="text-align:center;width:138px;height:19px"><b style="line-height:1.6;font-size:10pt;background-color:transparent">&nbsp;4-5</b></td>
<td style="text-align:center;width:133px;height:19px"><b style="line-height:1.6;font-size:10pt;background-color:transparent">&nbsp;6-7</b></td>
</tr>
<tr>
<td style="width:160px;height:381px"><span style="line-height:1.6;font-size:10pt;background-color:transparent">Explains </span><i style="line-height:1.6;font-size:10pt;background-color:transparent"><b>some</b></i><span style="line-height:1.6;font-size:10pt;background-color:transparent"> steps to be taken with limited details.</span><br>
<br>
<span style="line-height:1.6;font-size:10pt;background-color:transparent">Creates no timeline and shows no attempt to describe the&nbsp;</span><i style="font-size:13.3333px;line-height:21.3333px;background-color:transparent"><b>skills,&nbsp;qualities, and/or values</b>&nbsp;</i><span style="font-size:13.3333px;line-height:21.3333px;background-color:transparent">involved in the project.<br>
<br>
</span><span style="line-height:1.6;font-size:10pt;background-color:transparent">Describes </span><i style="line-height:1.6;font-size:10pt;background-color:transparent"><b>some</b></i><span style="line-height:1.6;font-size:10pt;background-color:transparent"> outcomes of each step using </span><i style="line-height:1.6;font-size:10pt;background-color:transparent"><b>irrelevant</b></i><span style="line-height:1.6;font-size:10pt;background-color:transparent"> or </span><i style="line-height:1.6;font-size:10pt;background-color:transparent"><b>no</b></i><span style="line-height:1.6;font-size:10pt;background-color:transparent"> evidence</span></td>
<td style="width:160px;height:381px"><span style="line-height:1.6;font-size:10pt;background-color:transparent">Explains </span><b style="line-height:1.6;font-size:10pt;background-color:transparent"><i>most</i> </b><span style="line-height:1.6;font-size:10pt;background-color:transparent">steps to be taken.<br>
</span><br>
<span style="line-height:1.6;font-size:10pt;background-color:transparent">Creates a </span><i style="line-height:1.6;font-size:10pt;background-color:transparent"><b>basic</b></i><span style="line-height:1.6;font-size:10pt;background-color:transparent"> timeline and&nbsp;</span><span style="line-height:1.6;font-size:10pt;background-color:transparent">shows a limited attempt&nbsp;</span><span style="font-size:13.3333px;line-height:21.3333px;background-color:transparent">to describe the&nbsp;</span><i style="font-size:13.3333px;line-height:21.3333px;background-color:transparent"><b>skills,&nbsp;qualities, and/or values</b>&nbsp;</i><span style="font-size:13.3333px;line-height:21.3333px;background-color:transparent">involved in the project.<br>
</span><br>
<span style="line-height:1.6;font-size:10pt;background-color:transparent">Uses </span><b style="line-height:1.6;font-size:10pt;background-color:transparent"><i>limited</i></b><span style="line-height:1.6;font-size:10pt;background-color:transparent"> or </span><i style="line-height:1.6;font-size:10pt;background-color:transparent"><b>irrelevant</b></i><span style="line-height:1.6;font-size:10pt;background-color:transparent"> evidence to outline </span><i style="line-height:1.6;font-size:10pt;background-color:transparent"><b>most</b></i><span style="line-height:1.6;font-size:10pt;background-color:transparent"> of the outcomes of each step of the process.</span></td>
<td style="width:138px;height:381px"><span style="line-height:1.6;font-size:10pt;background-color:transparent">Explains </span><i style="line-height:1.6;font-size:10pt;background-color:transparent"><b>all</b></i><span style="line-height:1.6;font-size:10pt;background-color:transparent"> steps to be taken.<br>
</span><span style="line-height:1.6;font-size:10pt;background-color:transparent"><br>
Creates a <b><i>developing</i></b>&nbsp;timeline and </span><i style="line-height:1.6;font-size:10pt;background-color:transparent"><b>lists the skills/qualities</b></i><span style="line-height:1.6;font-size:10pt;background-color:transparent"> involved at each point in the process.</span><br>
<br>
<span style="line-height:1.6;font-size:10pt;background-color:transparent">Uses </span><i style="line-height:1.6;font-size:10pt;background-color:transparent"><b>relevant</b></i><span style="line-height:1.6;font-size:10pt;background-color:transparent"> evidence, examples, and criteria for success to </span><i style="line-height:1.6;font-size:10pt;background-color:transparent"><b>describe</b></i><span style="line-height:1.6;font-size:10pt;background-color:transparent"> all outcomes of each step.</span></td>
<td style="width:133px;height:381px"><span style="line-height:1.6;font-size:10pt;background-color:transparent">&nbsp;Explains </span><i style="line-height:1.6;font-size:10pt;background-color:transparent"><b>several/varied clear steps</b></i><span style="line-height:1.6;font-size:10pt;background-color:transparent"> to be taken in their process.<br>
</span><br>
<span style="line-height:1.6;font-size:10pt;background-color:transparent">Creates a </span><i style="line-height:1.6;font-size:10pt;background-color:transparent"><b>detailed and complete</b></i><span style="line-height:1.6;font-size:10pt;background-color:transparent"> timeline and </span><b style="line-height:1.6;font-size:10pt;background-color:transparent"><i>outlines the skills</i>/qualities</b><span style="line-height:1.6;font-size:10pt;background-color:transparent"> involved at each point in the process.<br>
</span><br>
<span style="line-height:1.6;font-size:10pt;background-color:transparent">Uses a </span><i style="line-height:1.6;font-size:10pt;background-color:transparent"><b>variety of relevant </b></i><span style="line-height:1.6;font-size:10pt;background-color:transparent">evidence, examples, and/or success criteria </span><i style="line-height:1.6;font-size:10pt;background-color:transparent"><b>explain</b></i><span style="line-height:1.6;font-size:10pt;background-color:transparent"> several/varied o</span><span style="line-height:1.6;font-size:10pt;background-color:transparent">utcomes of each step.<br>
</span></td>
</tr>
</tbody>
</table>
<br>
