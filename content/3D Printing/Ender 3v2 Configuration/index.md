---
title: "Ender 3v2 Configuration"
date: 2024-01-15T21:00:00-00:00
draft: false
cover:
    #image: img/
    alt: "Ender 3v2 Configuration"
    caption: "Ender 3v2 Configuration"
    hidden: true
    hiddenInSingle: true
summary: "\"Current Ender 3v2 Configuration.\""
tags: ["3D Printing", "Ender 3v2", "Klipper"]
---

## Ender 3v2 Configuration

My current ender 3v2 printer is running [Klipper firmware](https://klipper3d.org). 
The configuration of the printer has also been modified to have additional fans, part cooling and auto bed leveling.
The bed leveling was installed using the [Klack Ender](https://kevinakasam.com/klackender) from KevinAkaSam, 
with future plans to upgrade to the [Belt Driven Ender 3](https://kevinakasam.com/belt-driven-ender-3).

## Component List

Ender 3v2 Printer addons:
- 3x Noctua Fan 20x10mm
- 1x Noctua Fan 40x10mm
- 1x Noctua Fan 90x25mm
- Klack Ender
- Direct Drive
- Metal Extruder
- Stiffer Springs

Klipper configuration:
- Raspberry Pi 4 (4Gb)
- Raspberry Pi Case
- Raspberry Pi Fan
- Raspberry Pi Cam 2
- Logitech C720 HD
- Tripod

## Klack Ender

To make the Klipper firmware compatible with the klack ender, there were a few problems. 
The main snag with the installation was configuring the probe in the firmware, when the printer was in the homing sequence,
the console continuously outputted `"Probe tr under the `[probe]` seiggered prior to movement"` - to solve this the probe had to made high.

This was done in the `KlackEnder.cfg`, under the `[probe]` section by changing `pin: PA7` to `pin: ^PA7` 