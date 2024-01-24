---
title: "Calibration Guide using IdeaMaker"
date: 2024-01-24T22:00:00-00:00
draft: false
cover:
    image: img/ideamaker.png
    alt: "Calibration Guide using IdeaMaker"
    caption: "Calibration Guide using IdeaMaker"
    hidden: true
    hiddenInSingle: true
summary: "\"Calibration Guide using IdeaMaker.\""
tags: ["3D Printing", "Filament Calibration"]
---

In my previous [guide](content/3D Printing/Filament Calibration/index.md), it ran through how to configure a filament using OrcaSlicer.
Whilst this is good for hobbyist printers such as a printer like my personal Ender3v2, it is something that does not necessarily work on all printers.
Cura is the most commonly used slicer that is not behind a firewall, however for printers that I run at the University, they use a different slicing software.
Therefore, this guide will dive into how to configure a 3D printer with IdeaMaker, using the Raise3D Pro 2 printer.

# 3D printer calibration steps 

## Extruder calibration
One of the first steps that has been neglected thus far in my other guides is the calibration of the extruder. 
A full guide on how to calibrate this will be posted soon.

Calibrating the extruder is one of the most important aspects of 3D printing asn something that I find myself doing on a regular basis.
By calibrating the extruder, it ensures that the amount of filament requested by the printer is the same amount of filament extruded.

Once the extruder has been calibrated, ender the value into your filament profile in IdeaMaker.

This can be found under `Printer settings -> Advacned -> Step-E per MM`
̣<!--- pic ref here --->

## Flow rate calibration
Flow rate has been covered before but the process is slightly different in IdeaMaker.
Flow rate should be calibrated for each type of filament that  is being printed and is different on all filaments, even if it is the same type of filament.
Most of the time, you will find that the values do not differentiate that much between filament and could be left, but it is best practice to calibrate this every time.

To do this a guide will be posted soon showing how to calibrate the flow rate.
After the calibration values have been identified for the specific filament, it can be inserted into IdeaMaker.

This setting can be found under: `Template Settings -> Advanced -> Primary Filament Flowrate`. 
To ensure that this setting takes effect when printing, the `Override Filament Setting` must be checked.

## Temperature calibration

## Retraction calibration

# Fine tuning

## Top and bottom layer flow rate

## X and Y compensation

## Fix hole dimensions

## Z seam calibration