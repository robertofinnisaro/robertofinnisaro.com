---
title: "Calibrating New Filaments for 3D Printing"
date: 2024-11-01T21:00-00:00
draft: false
cover:
    image: img/3d-calibration.jpg
    alt: "Calibrating a new filament"
    caption: "Calibrating a new filament"
    hidden: true
    hiddenInSingle: true
summary: "\"New filament calibration for 3D printing.\""
tags: ["3D Printing", "OrcaSlicer", "Filament Calibration"]
---

When a new filament arrives, don't just dive straight into printing with the filament.
It may be tempting to do this but all filaments act differently and a good print calibration can improve your print quality.
This process can take a while, but it will overall increase your productivity when 3D printing.

For this process, OrcaSlicer has great in-built tools that can be used to fine tune your printer for a new filament calibration.
There are multiple options in OrcaSlicer's calibration menu and this guide will look into how they work and how they can be used to calibrate a filament.

## OrcaSlicer Calibration Menu

The OrcaSlicer calibration menu is built directly into the slicer.
Below are the current options that are available.

- Temperature Tower
- Flow Rate
- Pressure Advance
- Tolerance Test
- Max (Volumetric) Flow Rate
- Vertical Fine Artifacts
- Retraction Test

## Temperature Tower

**What is it?**

The temperature tower is a calibration technique that determine the ideal printing temperature for the filament being used.
Choosing the correct temperature will help get the best print quality, and in partnership with process profiles it can help obtain the best strength for the parts.
Additionally, the correct temperature can help to reduce stringing and under-extrusion or over-extrusion issues.

OrcaSlicer uses a remix of the [Smart compact temperature calibration tower](https://www.thingiverse.com/thing:2729076) by gaaZolee. 
The calibration can be programed in 5&deg;C temperature steps.
Use the recommended temperatures for your limits that are provided by the manufacture of the filament.

**How to run it**

1. Select "Temperature" from the Calibration Menu.
2. Enter the limits for the temperature tests - these can be left at the default depending on the material.
3. Print the temperature tower. OrcaSlicer will automatically change the temperature throughout the print so that you are then able to inspect the temperatures and see which one suits your filament the best.

**How to analyse the tower**

Once the tower has been printed, you will notice that some of the temperature steps have better print quality than others.
The optimal temperature is the one which has the least amount of print issues. 
Print issues to look out for:
- Surface Finish
- Bridging
- Stringing
- Layer Adhesion
- Strength

## Flow Rate

**What is it?**

Flow Rate allows for the control of how much extrusion flow of a filament occurs when it leaves the nozzle. Whilst every material type melts differently, 
this is an important calibration step as it is best to have just the right amount of filament extruded out of the nozzle to get better quality prints.

If the flow rate is too high, this is known as over-extrusion, and it can cause issues when seeing fine details on a print and also the layer lines will be larger than optimal.
If the flow rate is too low however, this is known as under-extrusion, and this will have inconsistent side profiles and a weakness to the print, 
whilst leaving holes and gaps in the print.

**How to run it**

The flow rate test in OrcaSlicer can be found by the Flow Ration in OrcaSlicer, it is set to 100% or 1 by default and this may not be appropriate for the filament.
The steps to run the flow rate test are as follows:

1. Select the printer and filament type and input the process that you want to use.
2. From the calibration menu, select Flow Rate, and choose Pass 1.
3. A new project consisting of nine blocks will be created. Where each block has a different flow rate modifier. These can be investigated and inspected individually by checking the flow ratio value in the object menu.
4. Slice and print the project.
5. The best flow rate will be the object that has the smoothest top surface. If there are two which are close together, then the higher flow rate is to be chosen.
6. Use the formula: $$ FlowRatio_old * (100 + modifier) / 100 $$ and update the flow ratio in your filament profile settings.

If the original flow ratio was 0.98, and the best results was with +5. The new flow ratio value would be 1.029:
$$ 0.98 * (100 + 5) / 100 = 1.029 $$

## Pressure Advance


## Tolerance Test



## Max (Volumetric) Flow Rate



## Vertical Fine Artifacts



## Retraction Test