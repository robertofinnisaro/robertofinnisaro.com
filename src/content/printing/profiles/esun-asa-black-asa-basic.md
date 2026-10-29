---
name: "eSUN ASA Basic base preset"
filament: "esun-asa-black"
configuration: "ender-3-v2-corexy-box-turtle"
purpose: "Full standalone ASA preset"
slicer: "OrcaSlicer"
slicerVersion: "2.1.1"
nozzleTemp:
  firstLayer: 260
  other: 260
bedTemp:
  firstLayer: 105
  other: 105
maxVolumetricSpeed: 12
flowRatio: 0.93
pressureAdvance: 0.02
fan:
  min: 10
  max: 80
file: "/printing/profiles/ender-3-v2-corexy/filament/esun-asa-basic-myklipper-0-4-nozzle.json"
added: "2026-10-28"
---

A complete ASA preset written for the Klipper machine profile, rather than an
override of Orca's generic profile. Pressure advance is set to 0.02 but disabled
in this preset.
