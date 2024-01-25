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

In my previous [guide](/content/3D%20Printing/Filament%20Calibration/index.md), it ran through how to configure a filament using OrcaSlicer.
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
The next step of calibration is the calibrating the temperature, this can be done by importing a temperature tower into IdeaMaker.
When 3D printing, you will find that each filament reacts slightly different at various temperatures and finding the most appropriate temperature will provide the best properties.
This is something that will need to be considered when changing filament type (i.e. PLA - PETG), but it might also have an impact on colour  of the same filament type.

Finding the best temperature for the selected filament will ensure that there is the best print quality and best layer adhesion providing the best strength for a part.
After calibrating the temperature for the filament, you will be able to assess the best temperature which can be used for your prints.

The temperature tower in IdeaMaker is a little more finicky and requires a little more effort to set up compared to other slicers such as OrcaSlicer or Cura.
IdeaMaker will require you to manually change the hotend temperature for each layer of the tower.

The calibration method on other slicers uses a fork of the [gaaZolee smart temperature tower](https://www.thingiverse.com/thing:2729076), however if you want to save time you can download this [pre-set tower](/Temperature-Calibration-Tower.zip).
This guide will still run through how to calibrate the tower manually so that you have an understanding for future reference.

Once the model has been imported into IdeaMaker, select the model and navigate through `Group and Layer Settings -> Setting Group 1`.
After this you can hit the [+] symbol to add a new setting into the model. 
From here you an adjust the min and max layer height of the section; once this has been set, the pen function will allow you to edit the layer settings.
In the search bar, type `Temperature` and make sure that the `Left Extruder` has been checked, this will then allow you to set the temperature of the tower for that section.

This process can then be repeated for all of the remaining layers of the model. 

Once the tower has been printed you can inspect the tower to find the best layer temperature. 
This can be done by choosing the section which looks the best and has the most detail. 
You should ignore the stringing elements at this point as the retraction of the filament may not be correct at this stage of calibration.
This will be calibrated in the next section of this guide.

## Retraction calibration

# Fine tuning

## Top and bottom layer flow rate

## X and Y compensation

## Fix hole dimensions

## Z seam calibration