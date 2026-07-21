---
title: Planning the Lab
description: "Planning the architecture, hardware, physical rack, network and expansion path for Project Erebor."
published: '2026-07-18'
systemType: infrastructure
type: chapter
part: 1
chapter: 2
order: 2
estimatedTime: 60 minutes
difficulty: Beginner
hardware:
- Dell OptiPlex Micro
- Raspberry Pi
- ZimaBoard
software:
- Proxmox VE
- Docker
- OPNsense
tags:
- Planning
- Architecture
- Virtualisation
draft: false
---

> **Operational reference**
>
> This chapter explains how the physical rack is planned and constructed.
> The current installed equipment positions, mount revisions, cable routes and
> power allocation are recorded in the
> [Rack Layout reference](/systems/home-lab/reference/rack-layout).

## Overview

Defining requirements, constraints, naming conventions and the target architecture.

## Objectives

By the end of this chapter, the reader should be able to:

- Explain the purpose of this stage in the overall design.
- Make the relevant implementation decisions with clear trade-offs.
- Complete the practical work in a controlled sequence.
- Verify the result before proceeding.
- Identify the most common failure modes.

## Defining the Requirements

Content to be developed.

## Estabilishing Design Principles

Content to be developed.

## Selecting the Core Hardware

Content to be developed.

## Designing the Physical Lab

A home lab is often described in terms of servers, virtual machines, networks and applications. Those logical systems still depend on a physical structure that must support the equipment, provide airflow, manage cables and allow components to be maintained.

For Project Erebor, the physical platform will be based on **Lab Rax**, a modular 10-inch rack system manufactured primarily from 3D-printed components.

This choice makes the physical construction of the lab part of the project rather than simply a container for it.

Once the rack has been assembled, update the
[Rack Layout reference](/systems/home-lab/reference/rack-layout)
with the final rack-unit allocation, mount revisions and measured clearances.

### Why the enclosure matters

The rack determines more than the appearance of the completed lab. It influences:

- the equipment that can be installed
- the number of available rack units
- the location of power supplies
- airflow around mini PCs and networking equipment
- cable lengths and cable routing
- access to ports and storage devices
- the ease with which hardware can be removed
- the amount of future expansion available

Selecting the enclosure after purchasing the hardware can result in incompatible dimensions, blocked ventilation, inaccessible ports or insufficient rack capacity.

The physical structure should therefore be considered during the planning stage.

### Introducing Lab Rax

Lab Rax is a modular, 3D-printable rack system based around the compact 10-inch rack format.

Unlike a traditional steel rack, its frame, panels, shelves and device mounts can be produced using a domestic 3D printer. The design is particularly suited to compact home-lab hardware such as:

- Raspberry Pi computers
- mini PCs
- small managed switches
- firewall appliances
- single-board computers
- compact NAS systems
- patch panels
- power distribution components

The rack can be adapted by printing different posts, panels and equipment mounts. This allows Project Erebor to use device-specific brackets rather than placing every component on a generic shelf.

The resulting system is smaller and more configurable than a conventional 19-inch server rack.

### Why a 10-inch rack

Traditional enterprise equipment generally follows the 19-inch rack standard. That format provides broad compatibility, but it is unnecessarily large for most of the equipment planned for Project Erebor.

The lab will primarily contain:

- Dell OptiPlex Micro systems
- Raspberry Pi computers
- a compact managed switch
- a small OPNsense appliance
- a ZimaBoard-based NAS
- patching and power equipment

These devices do not require a full-width enterprise rack.

A 10-inch rack offers several advantages:

- reduced footprint
- lower material cost
- shorter print times
- easier desktop or shelf placement
- proportions better suited to mini PCs
- simpler custom mounting
- sufficient width for compact networking equipment

The main limitation is that 19-inch enterprise devices cannot be installed directly. This is acceptable because Project Erebor is intentionally based on compact hardware.

### Determining rack height

Rack height is measured in rack units, abbreviated as `U`.

One rack unit is approximately 44.45 millimetres high. Devices and shelves normally occupy one or more complete rack units.

The total rack height should not be calculated only from the equipment currently owned. Spare capacity is required for:

- future compute nodes
- replacement networking hardware
- patch panels
- cooling equipment
- blanking panels
- cable-management panels
- storage expansion

An initial layout might require the following capacity:

| Equipment          | Estimated space |
| --------------------| ----------------:|
| Patch panel        | 1U              |
| Managed switch     | 1U              |
| OPNsense appliance | 1U              |
| Erebor             | 1U              |
| Barad-dur          | 1U              |
| Moria              | 2U–3U           |
| Raspberry Pi shelf | 1U-2U           |
| Power distribution | 1U              |
| Reserved expansion | 2U–4U           |

This produces an estimated requirement of approximately 10U to 15U, depending on the final device mounts.

A smaller rack could be used initially, but building too close to the current requirement would make later expansion difficult. A modular rack allows Project Erebor to begin with a practical size while retaining the option to add additional sections.

### Proposed equipment order

The order of equipment within the rack should support cooling, cabling and maintenance.

A preliminary top-to-bottom layout could be:
```
┌──────────────────────────────┐
│ 1U  Patch panel              │
├──────────────────────────────┤
│ 1U  Argonath managed switch  │
├──────────────────────────────┤
│ 1U  Minas Tirith firewall    │
├──────────────────────────────┤
│ 1U  Erebor compute node      │
├──────────────────────────────┤
│ 1U  Barad-dur compute node   │
├──────────────────────────────┤
│ 3U  Moria storage platform   │
├──────────────────────────────┤
│ 1U  Raspberry Pi shelf       │
├──────────────────────────────┤
│ 1U  Power distribution       │
└──────────────────────────────┘
```
This arrangement places the network equipment close to the patch panel, reducing patch-cable length.

The heavier storage equipment is positioned lower in the rack. This lowers the centre of gravity and reduces the load applied to the upper printed frame.

The final order should be confirmed after the dimensions, cable locations and airflow requirements of each device are measured.

### Designing device mounts

Most compact home-lab devices are not designed for rack installation. They therefore require one of three mounting approaches:

1. a generic shelf
2. a device-specific tray
3. a custom rack-mount bracket

Generic shelves are easy to print and can accommodate changing hardware. However, they may waste space and allow equipment to move when cables are connected.

Device-specific trays provide a more secure and compact installation. They can include:

- locating tabs
- ventilation openings
- cable clearances
- power-button access
- front labels
- captive fasteners
- mounting points for power supplies

Custom brackets provide the cleanest result but require accurate measurement and may need to be redesigned when hardware is replaced.

Project Erebor should use device-specific mounts for permanent core hardware and generic shelves for temporary or experimental equipment.

### Measuring equipment

Before designing or selecting a mount, record:

- width
- height
- depth
- weight
- power-connector position
- network-port position
- ventilation openings
- power-button position
- removable-panel clearances
- minimum cable bend radius

Measurements should be taken with callipers where practical.

Additional clearance should be provided for print tolerances. A bracket designed to exactly match the measured width of a device may become too tight after printing.

A typical starting clearance is between 0.3 mm and 0.6 mm per side, although the correct value depends on printer calibration and material.

## Manufacturing the Lab Rax

The Project Erebor enclosure is not a conventional purchased steel rack. It is a fabricated component of the lab and must therefore be treated as an engineered assembly.

Printing the rack requires more planning than printing a decorative model. The completed parts will experience:

- continuous static loading
- heat from installed equipment
- repeated fastening and removal
- cable forces
- vibration from fans and storage devices
- long-term material creep
- possible impacts during maintenance

The settings in this section provide a controlled starting point. They do not replace inspection, test fitting or load testing.

Actual settings may need to be adjusted for the printer, filament, nozzle diameter, part geometry and ambient conditions.

### Part-printing guidelines

These are the recommended baseline settings for manufacturing Project Erebor's Lab Rax components.

| Setting                    | Recommended baseline                  |
| ----------------------------| ---------------------------------------|
| Printing process           | Fused Deposition Modelling            |
| Standard nozzle            | 0.4 mm                                |
| Optional structural nozzle | 0.6 mm                                |
| Layer height               | 0.20 mm                               |
| First-layer height         | 0.20–0.28 mm                          |
| Infill pattern             | Gyroid                                |
| General infill             | 20%                                   |
| Structural infill          | 25–35% where required                 |
| Walls or perimeters        | 4 minimum                             |
| Top layers                 | 4 minimum                             |
| Bottom layers              | 4 minimum                             |
| Supports                   | Only where required                   |
| Brim                       | Recommended for tall or narrow parts  |
| Dimensional compensation   | Printer-specific                      |
| Seam position              | Away from loaded faces where possible |

### 3D-printing process

The intended manufacturing process is:

Fused Deposition Modelling (FDM)
FDM is suitable because it provides:
- accessible equipment and materials
- repeatable production of replacement parts
- control over print orientation
- rapid modification of device mounts
- a broad range of useable thermoplastics
- practical production of large modular assemblies

Resin printing is not recomnended for the primary rack structure. Stanadard photopolymer resins are genrlly less uiable for large continuously loaded components and can be brittle.

Resin printing may still be appropriate for:
- labels
- decorative badges
- low-load cable identifiers
- small cosmetic details

### Material quantities

The eact material requirement deponds on rack height, mount design, wall count, infill and failed prints.

The following should be treated as an inital planning allowance rather than a guaranteed total:
| Material category           | Suggested allowance  | Intended use                              |
| -----------------------------| ---------------------:| -------------------------------------------|
| Primary structural material | Approximately 1.4 kg | Posts, rails, shelves and primary mounts  |
| Accent material             | Approximately 0.3 kg | Panels, labels and cosmetic components    |
| TPU                         | Approximately 60 g   | Feet, vibration pads and cable protection |
| Clear material              | Approximately 12 g   | Indicator windows or light guides         |

A contingency allowance of at least 15-25% should be added for:
- test parts
- calibration
- failed prints
- revised components
- spare structural parts

For large rack, purchasing all structural filament from the same manufacturer and colour batch may improve visual consistency.

### Structural material selction
#### PLA
PLA is easy to print and usually provides good dimensional accuracy and stiffness.

It is suitable for:
- test compoents
- dimensioanl prototypes
- labels
- decorative panels
- cable guides
- lightly loaded brackets
- parts located away from heat sources

Potential limitations include:
- lower temperature resistance than PETG, ABS or ASA
- possible creep under continuous load
- brittleness in thin clips
- deformation when exposed to elevated temperatures

PLA should not be rejected automaticallu, but its use for major structural components should be validated against actual temperatures and loads.
PLA variants marketed as PLA+, Tough PLA or PLA Pro may provide improved impact performance, but their properties vary between manufacturers.

#### PETG
PETG is a practial default for many structural rack components.
It generally provies:
- improved temperature resistance compared with standard PLA
- good toughness
- less brittle behaviour
- reasonable dimensional stability
- good resistance to repeated handling

PETG is suitable for:
- rack posts
- trays
- equipment brackets
- side panels
- cable-management components
- power-adapter mounts

Potnetial printing issues include:
- stringing
- reduced bridging performance
- excessive nozzle adhesion
- surface marking from wet filament
- less stiffness than some PLA formulations

PETG should be dried when moisture symptoms are present.

#### ABS
ABS offers improved temperature resistance and can be suiable for continiously loaded structural compoents.
It may be used for:
- rack posts
- equipment trays
- brackets near warm exhausts
- encolosed powercomponents
- parts requiring vapour smoothing

ABS normally requires:
- an encolosed printer
- controlled ambient temperature
- adwquate ventilation
- careful bed adhesion
- compensation for shrinkage

Large ABS parts may warp of split if the chamber temperature is unstable.

#### ASA
ASA has broadly simmilar printing requirements to ABS but provides improved ultaviolet resistance.
It is suitable for racks positioned near direct sunlight or in locations where UV exposure if expected.
For an indoor rack, the UV advantage may not be important. ASA can still be seletected for its temperature resistance and mechanical properties.

#### TPU
TPU should be used only for flexible compoents.
Recommended applications include:
- anti-slip feet
- vibration pads
- cable gromments
- edge protection
- flexible cable clips
- retention straps

A hardness of approximately 95A or softer is suitable for most of these parts.
Softer TPU may provide better vibration but can be more difficult to print.

#### Clear material
Clear or translucent material may be used for:
- status-light windows
- illuminated labels
- light guides
- small equipment indicators

Clear filament does not normally print optically clear without specialised geometry and post-processing. It should be regarded as translucent unless proven otherwise.

### Recommended material allocation
| Component type         | Preferred material      | Alternative             |
| ------------------------| -------------------------| -------------------------|
| Structural rack posts  | PETG, ABS or ASA        | Validated PLA+          |
| Device trays           | PETG                    | ABS or ASA              |
| Rack panels            | PETG or PLA             | ABS or ASA              |
| Cable guides           | PETG or PLA             | TPU for flexible guides |
| Feet                   | TPU                     | PETG with rubber pads   |
| Vibration isolation    | TPU                     | Commercial rubber pad   |
| Labels                 | PLA or PETG             | Resin                   |
| Light windows          | Clear PETG or clear PLA | Acrylic insert          |
| Power-adapter brackets | PETG, ABS or ASA        | Validated PLA+          |

### Filament conditioning
Wet filament can produce:
- bubbles
- popping sounds
- rough surfaces
- reduced layer adhesion
- stringing
- inconsistent extrusion

Structural filamanet should be stored in a sealed container with desiccant.
Drying temperature and duration must follow the filament manufacturer's specification. Applying excessive heat can deform the spool or damage the material.

Before beginning a long structural print:
1. inspect the filamant
2. dry it where necessary
3. confirm free spool rotation
4. check that the filament path cannot snag
5. confirm enough material remains to cmoplete the part

### Nozzle diameter
#### 0.4mm nozzle

A 0.4mm nozzle provides:
- broad profile compatibility
- good dimensional accuracy
- fine detail
- predictable fit for inserts and fasteners

It is suitable for most Lab Rax parts.

#### 0.6mm nozzle
A 0.6mm nozzle can reduce printing time and produce wider extrusion lines.
It may be preferable for:
- large rack posts
- shelves
- thick structural brackets
- non-cosmetic panels

A larger nozzle may require:
- revised wall counts
- revised line widths
- tolerance validation
- reduced fine-detail epectations

Do not assime that a model prepared for a 0.4mm nozzle wil retain identials fits when sliced for a 0.6mm nozzle.

### Layer height
#### Recommended setting
0.2mm
A 0.2mm layer height provides a useful balance between:
- strength
- print time
- dimensioanl accuracy
- surface finish
- support performance

#### Other acceptable layer heights
| Layer height | Use                                                  |
| -------------:| ------------------------------------------------------|
| 0.16 mm      | Detailed labels and close-fitting cosmetic parts     |
| 0.20 mm      | Default for most rack components                     |
| 0.24 mm      | Larger structural parts after validation             |
| 0.28 mm      | Rapid production with a suitable nozzle and geometry |

Lower layer heights do not automatically make parts stronger.
Layer adhesion depends more heavily on:
- material temperature
- cooling
- extrusion consistency
- print orientation
- filament condition

#### First layer
The first layer is critical for large strucutal parts.
Recommended checks include:
- clean build surface
- correct bed temperaute
- varified Z offset
- continuous extrusion
- consistent line width
- no gaps between adjancent lines
- no excessive squashing
- no lifted corners

A first-layer height between 0.20mm and 0.28mm may improve reliability, depending on the nozzle and printer.
The first layer should be observed before leaving the printer unattended.

### Infill type
#### Recommended patterm
Gyroid
Gyroid infill provides:
- support in multiple directions
- no full-width internal corssings within a single layer
- relatively consistent strength
- smooth tool paths
- good performance for general structual parts

Other usable patterns include:
| Pattern        | Suitable use                                               |
| ----------------| ------------------------------------------------------------|
| Cubic          | Structural components requiring multidirectional support   |
| Grid           | Simple brackets, with awareness of internal line crossings |
| Rectilinear    | General-purpose and fast printing                          |
| Adaptive cubic | Large parts where material reduction is useful             |
| Lightning      | Cosmetic panels only; not recommended for loaded parts     |


### Infill percentage
#### General recommendation
20%

Twenty percent gyroid infill is an appropriate starting point for many rack parts.

However, infill should not be treated as the primary strength control. Perimeter count, orientation and geometry often have greater influence.

#### Suggested ranges
| Component         | Suggested infill                       |
| -------------------| ---------------------------------------:|
| Decorative panel  | 10–15%                                 |
| Cable guide       | 15–20%                                 |
| Device tray       | 20–30%                                 |
| Rack post         | 25–35%, subject to model design        |
| Fastener block    | 30–50% or local modifier               |
| Flexible TPU foot | 10–25%, depending on required softness |
| Label             | 10–15%                                 |


Avoid setting every structural part to 100% infill. Fully solid parts can:
- consume excessive material
- increase print time
- introduce thermal stresses
- provide limited benefit compared with improved wall design

Use local modifier regions where additional strength is needed around:
- screw holes
- rack ears
- joints
- insert pockets
- load-bearing edges

### Walls and perimeters
#### Recommended baseline
4 walls or perimeters

For a 0.4 mm nozzle, four walls typically produce a shell approximately 1.6–1.8 mm thick, depending on line width.

Structural components may benefit from five or six walls where:

- screws pass through the shell
- the component acts as a beam
- the part carries sustained load
- the mount contains heat-set inserts
- the geometry has thin sections

Walls generally contribute more to bracket strength than equivalent increases in sparse infill.

### Top and bottom layers
#### Recommended baseline
4 top layers
4 bottom layers

At a 0.20 mm layer height, four layers produce approximately 0.8 mm of top or bottom thickness.

For large flat shelves, consider five or six layers to improve:

- surface closure
- stiffness
- screw-bearing surfaces
- resistance to local indentation

The slicer preview should be checked for incomplete top surfaces over low-density infill.

### Extrusion width

Automatic line-width settings are acceptable when the printer profile is validated.

A common starting point with a 0.4 mm nozzle is:

0.42–0.48 mm

Wider extrusion lines may improve wall bonding and reduce print time, but can affect:

- hole diameter
- snap-fit clearance
- heat-set insert pockets
- small labels
- thin ventilation slots

Any deviation from the model designer's assumed extrusion width should be tested on a small part.

## Print orientation

Print orientation must be selected according to load direction.

FDM components are weakest where a force attempts to separate layer lines.

The orientation should ensure that:

- mounting ears are not peeled away along layer boundaries
- screw loads pass through continuous perimeter paths
- hooks and clips are not printed with weak layer joints at their roots
- tall narrow posts have adequate bed contact
- device weight is not carried by a thin horizontal layer interface

A visually obvious orientation is not always the strongest orientation.

### Orientation review

Before slicing each structural part, identify:

1. the expected load direction
2. the likely failure plane
3. the layer-line direction
4. the location of fasteners
5. whether supports would weaken a mating surface
6. whether the first-layer surface needs dimensional accuracy

Document non-obvious orientations in the fabrication notes.

### Supports

Supports should be avoided on critical mating surfaces where possible.

Support material can reduce:

- dimensional accuracy
- surface finish
- hole quality
- sliding fit
- insert-pocket accuracy

Recommended support strategy:

- reorient parts before enabling supports
- use build-plate-only supports where possible
- use painted or manual supports for isolated features
- use support interfaces for important surfaces
- avoid supports inside inaccessible cavities
- verify that support removal will not damage thin walls

Organic or tree supports may be useful for isolated overhangs, but should be validated for the chosen slicer.

### Bridging

Ventilation slots and cable openings may rely on bridging.

Before printing a large component, confirm the printer can bridge the required distance using the selected material.

Poor bridges can:

- obstruct ventilation
- interfere with cable paths
- reduce hole dimensions
- create loose strands inside equipment mounts

Bridge flow, speed and cooling should be calibrated independently of normal wall settings.

### Bed adhesion

Large rack components may be susceptible to corner lift and warping.

Recommended measures include:

- cleaning the build plate
- using the correct surface for the material
- maintaining a stable ambient temperature
- avoiding drafts
- applying a brim
- using mouse ears on sharp corners
- reducing excessive first-layer cooling
- ensuring the printer frame is mechanically sound

### Brim guidance

Use a brim for:

- tall narrow posts
- ABS or ASA components
- parts with small contact areas
- components with sharp corners
- long prints where edge lift would cause failure

The brim should be wide enough to stabilise the part but not so large that removal damages the component.

### Build-plate placement

Avoid placing critical features directly over known build-plate defects.

For multiple parts:

- allow sufficient spacing for cooling
- consider printing structural components individually
- avoid sequential printing unless gantry clearances are verified
- do not overload the plate with parts that would all fail if one detaches

For repeat parts, printing one component first allows fit and strength to be verified before committing to a complete batch.

### Temperatures

No universal nozzle or bed temperature should be placed in the project documentation because temperatures vary between manufacturers and filament formulations.

Use the filament manufacturer's stated range as the starting point.

Then validate:

- layer adhesion
- surface finish
- stringing
- dimensional accuracy
- overhang quality
- warping
- insert-pocket quality

Structural parts should not be printed at the lowest possible temperature merely to improve appearance. Insufficient temperature can reduce layer bonding.

### Cooling

Cooling requirements depend on the material.

### PLA

PLA usually benefits from substantial part cooling after the first layers.

Too little cooling can reduce overhang quality, while excessive cooling on large structural parts can contribute to internal stress.

### PETG

PETG often uses less cooling than PLA.

Excessive cooling may reduce layer adhesion. Insufficient cooling may affect bridges and overhangs.

### ABS and ASA

ABS and ASA normally use limited part cooling and benefit from a warm, stable enclosure.

Large variations in chamber temperature can contribute to warping and layer splitting.

### TPU

TPU cooling depends on the formulation and part geometry. Excessive speed usually causes more problems than insufficient cooling.

### Print speed

Structural parts should use validated speeds rather than the highest possible machine speed.

A practical process is:

1. use the printer manufacturer's proven material profile;
2. reduce outer-wall speed where dimensional accuracy is important;
3. limit volumetric flow to the filament's tested capability;
4. monitor long straight walls for ringing or under-extrusion;
5. avoid aggressive acceleration on tall rack posts.

Fast travel or printing can cause tall narrow components to wobble.

### Acceleration and vibration

Tall rack components may amplify printer vibration.

Symptoms include:

- ringing
- shifted layers
- poor corner accuracy
- unstable surface finish
- part detachment

For tall parts:

- reduce acceleration
- ensure the printer stands on a stable surface
- check belt tension
- verify spool movement
- avoid collisions with curled edges
- consider a brim or temporary stabilising structure

### Retraction and stringing

Stringing can interfere with:

- ventilation slots
- screw holes
- sliding surfaces
- cable channels

Retraction should be tuned for the material and extruder type.

Wet filament should be ruled out before making large retraction changes.

Avoid excessive retraction with flexible filament, as it may cause feeding problems.

### Dimensional tolerance

Printed mounts should not use nominal device dimensions without clearance.

Recommended starting clearances:

| Fit type               | Starting allowance                        |
| ------------------------| ------------------------------------------:|
| Close sliding fit      | 0.20–0.30 mm per side                     |
| General device tray    | 0.30–0.60 mm per side                     |
| Loose removable fit    | 0.50–0.80 mm per side                     |
| Screw clearance hole   | Based on fastener and printer calibration |
| Heat-set insert pocket | Based on insert manufacturer's dimensions |
| Snap fit               | Must be prototyped                        |

These values are starting points only.

Print a tolerance test using the same:

- material
- nozzle
- layer height
- line width
- orientation
- slicer profile

### Hole compensation

FDM holes often print undersized.

Do not enlarge all holes globally without measurement.

Use one of the following methods:

- model the hole with calibrated compensation
- use the slicer's hole-compensation setting
- drill the hole to final size
- use a reamer for accurate alignment
- print a fastener test coupon first

Holes for self-tapping screws require a different diameter from clearance holes or heat-set insert pockets.

Heat-set inserts

Heat-set inserts are recommended where a joint will be assembled repeatedly.

Use them for:

- removable device trays
- side panels
- frequently accessed mounts
- structural joints requiring reliable clamping
- replaceable accessory panels

### Insert installation procedure

1. Confirm the insert size and matching pocket.
2. Print a test block before the final part.
3. Heat the installation tip to a controlled temperature.
4. Align the insert vertically.
5. Press slowly without forcing it.
6. Stop when the insert is slightly proud of the surface.
7. Use a flat metal surface to finish alignment if required.
8. Allow the plastic to cool completely.
9. Inspect for cracking, bulging or misalignment.
10. Test with the correct fastener.

Do not install inserts while the part is still warm from printing.

Avoid placing inserts too close to thin external walls.

### Fasteners

The rack should use a standardised fastener set.

Recommended documentation fields include:

- thread diameter
- pitch
- length
- head type
- washer type
- insert type
- tightening method
- intended component

Do not overtighten screws in printed parts.

Printed components can deform under excessive clamping force even when heat-set inserts are used.

Use washers where they help distribute force across a printed surface.

Thread-locking compounds should only be used when compatible with the plastic and insert material.

### TPU parts

TPU components require a separate profile.

Recommended starting considerations:

| Setting       | Guidance                                  |
| ---------------| -------------------------------------------|
| Hardness      | 95A or softer                             |
| Print speed   | Lower than rigid filament                 |
| Retraction    | Minimal and carefully tuned               |
| Filament path | Constrained                               |
| Infill        | Depends on desired flexibility            |
| Walls         | Two to four, depending on design          |
| Drying        | Important if stringing or bubbling occurs |


The flexibility of a TPU component is controlled by:

- hardness
- wall count
- infill percentage
- infill pattern
- component geometry
- print orientation

A softer material does not automatically produce the best vibration mount. Excessively soft feet may allow the rack to move.

### Colour allocation

The rack may use a primary and accent colour.

A suggested scheme is:

| Part category              | Colour role           |
| ----------------------------| -----------------------|
| Structural posts and rails | Primary               |
| Device trays               | Primary               |
| Blank panels               | Accent                |
| Labels                     | Accent or contrasting |
| Cable guides               | Accent                |
| Feet and vibration pads    | TPU colour            |
| Status windows             | Clear or translucent  |

Colour should not prevent replacement parts from being printed. Functional consistency is more important than exact cosmetic matching.

### Print sequence

The rack should not be printed as one uninterrupted batch.

Recommended sequence:

1. calibration coupons;
2. tolerance test;
3. heat-set insert test block;
4. one structural joint;
5. one rack post;
6. one rail;
7. one device mount;
8. complete structural set;
9. equipment-specific mounts;
10. panels and cosmetic components;
11. TPU feet and cable parts;
12. spare high-risk components.

This sequence detects design or calibration problems before large quantities of filament are consumed.

### Prototype validation

Before printing the complete rack, validate:

- rail spacing
- rack-unit height
- fastener alignment
- insert fit
- tray fit
- cable clearance
- airflow clearance
- device removal
- power-button access
- structural rigidity

A prototype does not need to use the final colour, but should use the same material family where mechanical behaviour matters.

### Slicer-project retention

Save the slicer project for every production part.

The saved project should preserve:

- model orientation
- support placement
- modifier regions
- seam placement
- material profile
- nozzle size
- layer height
- wall count
- infill
- bed placement

Exporting only G-code is insufficient because G-code is tied to a particular printer configuration and may not be safely reusable after firmware or profile changes.

File organisation

Recommended repository structure:

fabrication/
└── lab-rax/
    ├── README.md
    ├── source-models/
    ├── modified-models/
    ├── exported-models/
    ├── slicer-projects/
    │   ├── 0.4mm/
    │   └── 0.6mm/
    ├── print-profiles/
    ├── calibration/
    ├── photos/
    ├── print-log/
    ├── assembly/
    ├── bill-of-materials.md
    ├── printing-guidelines.md
    └── revisions.md
Part identification

Every custom or modified part should have a unique identifier.

Recommended format:

LRX-<category--<number--R<revision-

Examples:

LRX-STR-001-R1
LRX-MNT-004-R2
LRX-CBL-003-R1

Suggested categories:

| Code | Category                    |
| ------| -----------------------------|
| STR  | Structural                  |
| MNT  | Equipment mount             |
| PNL  | Panel                       |
| CBL  | Cable management            |
| PWR  | Power                       |
| AIR  | Airflow                     |
| FOT  | Foot or vibration component |
| LBL  | Label                       |


Where practical, the part ID and revision should be embossed or recessed into a non-critical surface.

### Print log

Each production print should be recorded.

| Field                 | Example                 |
| -----------------------| -------------------------|
| Part ID               | LRX-MNT-004-R1          |
| Printer               | CoreXY Printer          |
| Date                  | 2026-06-23              |
| Material              | PETG                    |
| Filament manufacturer | To be recorded          |
| Filament colour       | Black                   |
| Nozzle                | 0.4 mm                  |
| Layer height          | 0.20 mm                 |
| Walls                 | 4                       |
| Infill                | 20% gyroid              |
| Print time            | To be recorded          |
| Material used         | To be recorded          |
| Result                | Pass or fail            |
| Notes                 | Fit adjustment required |


### Quality inspection

Every structural part should be inspected before assembly.

#### Visual inspection

Check for:

- layer separation;
- cracks;
- under-extrusion;
- missing walls;
- severe warping;
- poor bridging;
- damaged screw holes;
- incomplete top surfaces;
- embedded debris;
- nozzle collisions;
- shifted layers.

#### Dimensional inspection

Measure:

rail spacing;
rack-unit height;
hole centres;
insert-pocket diameter;
equipment-tray width;
device-retention features;
overall part straightness.

#### Mechanical inspection

Apply moderate hand pressure in the expected load direction.

Reject parts showing:

- audible cracking
- visible layer separation
- permanent deformation
- loose inserts
- excessive flex
- unstable mating surfaces

A hand test is not a substitute for a controlled load test, but it can identify obvious failures.

### Load testing

The assembled rack should be tested before live equipment is installed.

A practical staged test is:

1. assemble the empty frame
2. check squareness
3. tighten fasteners consistently
4. add a small test load
5. inspect all joints
6. increase the load gradually
7. leave the rack loaded for an extended period
8. inspect for creep or deformation
9. repeat after the rack reaches normal operating temperature

Use inert test weights rather than valuable equipment during the initial test.

Do not exceed the expected operating load during testing unless the structure has been intentionally designed for that test factor.

### Thermal validation

After installing equipment, record temperatures under:

- idle conditions
- normal workload
- sustained high workload
- highest expected ambient room temperature

Measure or record:

- device CPU temperature
- storage temperature
- rack inlet temperature
- rack exhaust temperature
- temperature near power adapters
- visible deformation of printed parts

If structural parts become noticeably warm, reassess the material choice and airflow.

### Long-term inspection

Printed parts can deform slowly under continuous load.

Inspect the rack:

- after initial assembly
- after 24 hours under load
- after one week
- after one month
- every three months thereafter
- after any overheating event
- after moving the rack
- after adding heavy equipment

Record:

- post straightness
- joint movement
- tray sag
- loose fasteners
- cracked layers
- insert movement
- heat-related deformation

### Spare parts

Print or retain the files for high-risk replacement parts.

Suggested spares include:

- one structural connector
- one rack foot
- one rail section
- one cable guide
- one blanking panel
- one commonly used equipment bracket

Retain enough filament from the original batch to produce repairs where colour consistency matters.

### Failure criteria

A printed part should be replaced when it shows:

- visible cracking 
- layer separation
- permanent bending
- increasing tray sag
- loose or rotating inserts
- distorted screw holes
- heat deformation
- unstable device retention
- repeated fastener loosening

Do not repair a critical structural part using adhesive unless the repair has been specifically engineered and validated.

### Printing checklist

Before printing:

- [ ] Confirm the current model revision.
- [ ] Confirm the part ID.
- [ ] Confirm the licence permits the intended use and modification.
- [ ] Inspect the model for errors.
- [ ]  Select the correct material.
- [ ] Dry the filament if required.
- [ ] Confirm sufficient filament remains.
- [ ] Confirm nozzle size.
- [ ] Confirm layer height.
- [ ] Confirm wall count.
- [ ] Confirm top and bottom layers.
- [ ] Confirm infill pattern and percentage.
- [ ] Review print orientation.
- [ ] Review support placement.
- [ ] Review seam placement.
- [ ] Review the sliced layer preview.
- [ ] Confirm fastener and insert clearances.
- [ ] Clean the build plate.
- [ ] Observe the first layer.

After printing:

- [ ] Allow the part to cool before removal.
- [ ] Inspect for cracks and layer separation.
- [ ] Remove supports carefully.
- [ ] Deburr holes and edges.
- [ ] Check dimensions.
- [ ] Test the mating fit.
- [ ] Install inserts where required.
- [ ] Record the print in the print log.
- [ ] Mark the part revision.
- [ ] Reject or quarantine failed parts.




The rack will carry equipment that generates heat and may remain under load continuously. Material selection therefore matters.

### Cooling and airflow

Mini PCs and networking equipment depend on clear ventilation paths.

A compact rack can unintentionally restrict airflow if equipment is mounted too closely or if solid printed panels cover intake and exhaust openings.

For each device, identify:

air intake location;
exhaust location;
expected heat output;
fan direction;
minimum clearance;
neighbouring heat sources.

The layout should avoid directing the exhaust of one device into the intake of another.

Where required, the rack can include:

vented shelves;
perforated side panels;
blanking panels;
low-speed exhaust fans;
temperature sensors;
fan-control automation.

Fans should not be added without understanding the intended airflow path. Poorly positioned fans may create turbulence or recirculate hot air rather than removing it.

Temperature monitoring should be installed before concluding that passive cooling is sufficient.

### Cable management

The rack will contain several cable types:

Ethernet;
mains power;
low-voltage DC power;
USB;
HDMI or DisplayPort during maintenance;
storage connections;
antenna extensions.

Network and power cables should be routed separately where practical.

The design should provide:

vertical cable routes;
horizontal cable-management points;
cable tie or hook-and-loop attachment points;
strain relief;
service loops;
labels at both cable ends;
access to removable equipment.

Cables should not be pulled tight. A small service loop allows a device to be removed or repositioned without disconnecting the entire rack.

The bend radius of Ethernet and fibre cables must also be respected.

### Power distribution

Power design should be planned alongside equipment placement.

Each device may use a separate external power adapter. Without planning, these adapters can occupy significant space and create a difficult-to-maintain cable bundle.

The power plan should document:

device power requirements;
adapter voltage and current;
connector type;
expected maximum consumption;
power-strip capacity;
UPS requirements;
shutdown behaviour;
power-restoration behaviour.

Possible arrangements include:

a rack-mounted mains power strip;
an external surge-protected power strip;
a compact UPS;
a DC distribution system for compatible devices.

A shared DC supply can reduce the number of adapters, but it introduces a common failure point and must be correctly fused.

For the initial build, retaining manufacturer-supplied adapters is the lower-risk approach.

### Structural limitations

A printed rack should not be treated as equivalent to a steel enterprise rack.

Its capacity depends on:

material;
printer calibration;
print orientation;
wall thickness;
joint design;
rack height;
equipment weight;
ambient temperature;
long-term material creep.

Heavy equipment should be installed near the bottom.

The rack should stand on a stable surface and should not be lifted by a single printed panel or post when loaded.

If the completed rack becomes tall, it may require:

a wider base;
wall restraint;
additional bracing;
metal threaded rods;
separation into multiple rack sections.

The printed parts should be inspected periodically for deformation, cracking or loose fasteners.

### Serviceability

A visually compact build can become difficult to maintain if hardware cannot be removed without dismantling adjacent equipment.

Each mount should be assessed for:

front or rear removal;
cable disconnection;
power-button access;
storage access;
fan cleaning;
CMOS or reset access;
replacement time.

Core infrastructure should not require the entire rack to be disassembled.

Where possible, trays should slide out or detach from the front after disconnecting clearly labelled cables.

### Expansion strategy

The Lab Rax system supports an incremental build.

Project Erebor can begin with enough capacity for Erebor and the initial network equipment, then expand as Moria, Minas Tirith and Orthanc are introduced.

However, expansion should still be planned before printing.

The initial design should reserve:

physical rack units;
switch ports;
power outlets;
cable routes;
cooling capacity;
mounting hardware.

A printed rack makes physical modification easier, but adding capacity after the rack is fully wired may still require significant rework.

## Designing the Logical Architecture

Content to be developed.

## Naming the Infrastructure

Content to be developed.

## Planning the Network

Content to be developed.

## Planning Storage

Content to be developed.

## Planning Backups

Content to be developed.

## Defining the Implementation Phases

Content to be developed.

## Bill of Materials

Content to be developed.

## Verification checklist

- [ ] The chapter objectives have been completed.
- [ ] Configuration changes have been documented.
- [ ] The result has been tested.
- [ ] A rollback or recovery route is understood.

## Image placeholders

Add screenshots, diagrams or photographs here as the build progresses.

## Summary

This chapter provides the foundation for the next stage of Project Erebor.

## Related references

- [Rack Layout](/systems/home-lab/reference/rack-layout)
- [Hardware Inventory](/systems/home-lab/reference/hardware-inventory)
- [VLAN Plan](/systems/home-lab/reference/vlan-plan)
- [IP Addressing](/systems/home-lab/reference/ip-addressing)
- [Storage Layout](/systems/home-lab/reference/storage-layout)