---
name: "Klipper with Box Turtle"
printer: "ender-3-v2-corexy"
nozzle: "0.4 mm stainless steel"
multiMaterial:
  - unit: "Box Turtle"
    slots: 4
active: true
firmware: "ender-3-v2-corexy-box-turtle"
machineFile: "/printing/profiles/ender-3-v2-corexy/machine/klipper-ender-3v2.json"
presets:
  - name: "0.20mm-fast"
    layerHeight: 0.2
    file: "/printing/profiles/ender-3-v2-corexy/process/0-20mm-fast.json"
  - name: "0.20mm-normal"
    layerHeight: 0.2
    file: "/printing/profiles/ender-3-v2-corexy/process/0-20mm-normal.json"
  - name: "0.20mm-slow-asa"
    layerHeight: 0.2
    file: "/printing/profiles/ender-3-v2-corexy/process/0-20mm-slow-asa.json"
  - name: "0.20mm-slow"
    layerHeight: 0.2
    file: "/printing/profiles/ender-3-v2-corexy/process/0-20mm-slow.json"
added: "2026-10-28"
---

The current setup: Klipper firmware with the four-lane Box Turtle feeding the
Stealthburner. Tool changes are handled by the printer's own `T` macros with an
external purge.
