---
title: "Rack Layout"
description: "Physical rack positions, device placement, power distribution and network connections for the home lab."
published: 2026-07-20

systemType: infrastructure
contentType: reference
referenceType: architecture

order: 3

hardware:
  - Network Rack
  - Managed Switch
  - Patch Panel
  - Power Distribution Unit

software: []

tags:
  - Rack
  - Hardware
  - Cabling
  - Infrastructure

draft: false
---

# Rack Layout

This page records the current physical configuration of the Project Erebor rack.

Unlike the planning chapter, which describes how the rack was designed, this page should always reflect the deployed arrangement. Any change to equipment position, rack-unit allocation, power distribution or cable routing should be recorded here.

> **Document role:** Operational reference  
> **Last physically verified:** Not yet recorded  
> **Rack platform:** Lab Rax 10-inch modular rack  
> **Current status:** Planned

## Rack summary

| Property                | Current value                    |
| -------------------------| ----------------------------------|
| Rack system             | Lab Rax                          |
| Rack width              | 10-inch                          |
| Total rack height       | To be confirmed                  |
| Occupied rack units     | To be confirmed                  |
| Reserved rack units     | To be confirmed                  |
| Structural material     | To be confirmed                  |
| Accent material         | To be confirmed                  |
| Primary mounting method | Printed device trays and shelves |
| Rack location           | To be confirmed                  |
| Power source            | To be confirmed                  |
| UPS protection          | To be confirmed                  |
| Active cooling          | To be confirmed                  |

## Rack-unit allocation

The following table is the authoritative record of rack-unit usage.

Update it whenever equipment is added, removed or moved.

| Rack unit | Device             | Role                       | Mount type             | Status  |
| ----------:| --------------------| ----------------------------| ------------------------| ---------|
| U01       | Patch panel        | Network termination        | Printed rack panel     | Planned |
| U02       | Argonath           | Managed network switch     | Device-specific mount  | Planned |
| U03       | Minas Tirith       | OPNsense firewall          | Device-specific tray   | Planned |
| U04       | Erebor             | Primary Proxmox node       | OptiPlex Micro mount   | Planned |
| U05       | Barad-dur          | Secondary Proxmox node     | OptiPlex Micro mount   | Future  |
| U06       | Raspberry Pi nodes | Lightweight infrastructure | Multi-device shelf     | Planned |
| U07-U09   | Moria              | Storage platform           | Device-specific tray   | Future  |
| U10       | Power distribution | Power delivery             | Printed or metal shelf | Planned |

> Rack-unit numbering should be updated once the final orientation is confirmed. This document assumes numbering from the top of the rack downward.

## Front elevation

```
┌─────────────────────────────────────────┐
│ U01  Patch panel                        │
├─────────────────────────────────────────┤
│ U02  Argonath — managed switch          │
├─────────────────────────────────────────┤
│ U03  Minas Tirith — OPNsense firewall   │
├─────────────────────────────────────────┤
│ U04  Erebor — primary Proxmox node      │
├─────────────────────────────────────────┤
│ U05  Barad-dur — secondary Proxmox node │
├─────────────────────────────────────────┤
│ U06  Raspberry Pi shelf                 │
├─────────────────────────────────────────┤
│ U07  Moria - storage platform           │
│ U08  2.5" SSD                           │
│ U09  3.5" HDD                           │
├─────────────────────────────────────────┤
│ U10  Power distribution                 │
└─────────────────────────────────────────┘
```
This is a planning elevation. Replace it with the final arrangement once the rack has been assembled.

## Equipment inventory

| Property          | Value                       |
| -------------------| -----------------------------|
| Device            | To be confirmed             |
| Function          | Network cable termination   |
| Mount             | Printed 10-inch patch panel |
| Front connections | RJ45 keystone modules       |
| Rear connections  | Permanent Ethernet runs     |
| Power required    | No                          |
| Cooling required  | No                          |
| Service access    | Front and rear              |


The patch panel is positioned adjacent to the managed switch to minimise patch-cable length.

## U02 — Argonath

| Property           | Value                                 |
| ------------------ | ------------------------------------- |
| Device             | Managed Ethernet switch               |
| Function           | Core switching and VLAN transport     |
| Mount              | Device-specific printed mount         |
| Power input        | To be confirmed                       |
| Network ports      | To be confirmed                       |
| Cooling direction  | To be confirmed                       |
| Management address | See [IP Addressing](./ip-addressing/) |
| VLAN configuration | See [VLAN Plan](./vlan-plan/)         |


The switch should remain accessible from the front so that patch cables can be replaced without removing surrounding equipment.

## U03 — Minas Tirith

| Property                | Value                                   |
| ----------------------- | --------------------------------------- |
| Device                  | OPNsense appliance                      |
| Function                | Firewall, routing and inter-VLAN policy |
| Mount                   | Device-specific printed tray            |
| WAN connection          | To be confirmed                         |
| LAN or trunk connection | To be confirmed                         |
| Cooling direction       | To be confirmed                         |
| Management address      | See [IP Addressing](./ip-addressing/)   |


The firewall is positioned close to the switch to keep the trunk and management connections short.

## U04 — Erebor

| Property               | Value                                            |
| ---------------------- | ------------------------------------------------ |
| Device                 | Dell OptiPlex 3060 Micro                         |
| Function               | Primary Proxmox compute node                     |
| Mount                  | Device-specific printed mount                    |
| Power adapter location | To be confirmed                                  |
| Network connection     | Argonath                                         |
| Cooling intake         | To be confirmed                                  |
| Cooling exhaust        | To be confirmed                                  |
| Proxmox address        | See [IP Addressing](./ip-addressing/)            |
| Hosted workloads       | See [Virtual Machine Inventory](./vm-inventory/) |

The mount must preserve access to:

- the power button
- front USB ports
- rear network and display ports
- ventilation openings
- removable panels used during maintenance

## U05 — Barad-dur

Barad-dur is reserved as the future secondary Proxmox node.

Until the node is installed, these rack units should remain empty or use removable blanking panels.

## U06 — Raspberry Pi shelf

| Property       | Value                               |
| ----------------| -------------------------------------|
| Devices        | Raspberry Pi systems                |
| Function       | Lightweight infrastructure services |
| Mount          | Multi-device printed shelf          |
| Power method   | To be confirmed                     |
| Network method | Wired Ethernet                      |
| Cooling method | Passive or active, to be confirmed  |

The shelf should allow individual Raspberry Pi systems to be removed without dismantling the entire assembly.

## U07–U09 — Moria

| Property           | Value                                     |
| ------------------ | ----------------------------------------- |
| Device             | ZimaBoard-based storage platform          |
| Function           | NAS, shared storage and backup target     |
| Mount              | Device-specific printed tray              |
| Storage devices    | To be confirmed                           |
| Power input        | To be confirmed                           |
| Network connection | To be confirmed                           |
| Cooling method     | To be confirmed                           |
| Storage layout     | See [Storage Layout](./storage-layout/)   |
| Backup role        | See [Backup Strategy](./backup-strategy/) |

The storage platform is positioned in the lower portion of the rack because it is expected to be one of the heavier assemblies.

## U10 — Power distribution

| Property                 | Value                                  |
| ------------------------ | -------------------------------------- |
| Distribution type        | To be confirmed                        |
| Input protection         | To be confirmed                        |
| UPS-backed               | To be confirmed                        |
| Total rated load         | To be confirmed                        |
| Estimated operating load | To be measured                         |
| Adapter mounting         | Printed brackets or external enclosure |

Manufacturer-supplied power adapters should remain identifiable and should not be permanently enclosed without ventilation.

## Mount inventory

| Mount ID | Device                   | Rack units | Material        | Revision | Status  |
| ----------| --------------------------| -----------:| -----------------| ----------| ---------|
| MNT-001  | Patch panel              | 1U         | To be confirmed | R1       | Planned |
| MNT-002  | Managed switch           | 1U         | To be confirmed | R1       | Planned |
| MNT-003  | OPNsense appliance       | 1U         | To be confirmed | R1       | Planned |
| MNT-004  | Dell OptiPlex 3060 Micro | 2U         | To be confirmed | R1       | Planned |
| MNT-005  | ZimaBoard 2              | 3U         | To be confirmed | R1       | Future  |
| MNT-006  | Raspberry Pi shelf       | 1U         | To be confirmed | R1       | Planned |

Each custom mount should have a matching record under the fabrication section of the project repository.

## Printed-part register

| Part ID | Part name      |        Quantity | Material        | Colour  | File revision | Printed |
| ------- | -------------- | --------------: | --------------- | ------- | ------------- | ------- |
| LRX-001 | Rack post      | To be confirmed | To be confirmed | Primary | R1            | No      |
| LRX-002 | Side connector | To be confirmed | To be confirmed | Primary | R1            | No      |
| LRX-003 | Rack foot      | To be confirmed | To be confirmed | Accent  | R1            | No      |
| LRX-004 | Device rail    | To be confirmed | To be confirmed | Primary | R1            | No      |
| LRX-005 | Cable guide    | To be confirmed | To be confirmed | Accent  | R1            | No      |
| LRX-006 | Blank panel    | To be confirmed | To be confirmed | Accent  | R1            | No      |

## Airflow plan

The airflow plan should be completed after the equipment positions have been tested.

| Device       | Intake          | Exhaust         | Clearance required | Observed temperature |
| --------------| -----------------| -----------------| --------------------| ----------------------|
| Argonath     | To be confirmed | To be confirmed | To be confirmed    | Not measured         |
| Minas Tirith | To be confirmed | To be confirmed | To be confirmed    | Not measured         |
| Erebor       | To be confirmed | To be confirmed | To be confirmed    | Not measured         |
| Barad-dur    | To be confirmed | To be confirmed | To be confirmed    | Not measured         |
| Moria        | To be confirmed | To be confirmed | To be confirmed    | Not measured         |

## Airflow rules
> Do not cover manufacturer ventilation openings.
> Do not direct one device's exhaust into another device's intake.
> Leave clearance around fan intakes.
> Avoid solid blanking panels where ventilation is required.
> Use active rack cooling only after temperatures have been measured.
> Record idle and sustained-load temperatures after installation.

## Cable-routing plan
### Network cabling

Network cables should run between the patch panel and Argonath using short labelled patch leads.

Longer cables should be routed along the side or rear of the rack and secured using removable hook-and-loop straps.

### Power cabling

Power cables should be routed separately from network cables where practical.

External power adapters should be:

- mechanically supported
- labelled with the destination device
- positioned where heat can escape
- removable without cutting cable ties
- protected from cable strain

### Cable labels

Every cable should be labelled at both ends.

Recommended format:

\<source\>-\<port\>__\<destination\>-\<port\>

Example:
```
ARG-GE01__ERE-NIC01
```
See Naming Conventions for the final label structure.

## Power budget

| Device               | Supply rating   | Expected draw   | Measured idle | Measured load |
| ----------------------| ----------------:| ----------------:| --------------:| --------------:|
| Argonath             | To be confirmed | To be confirmed | Not measured  | Not measured  |
| Minas Tirith         | To be confirmed | To be confirmed | Not measured  | Not measured  |
| Erebor               | To be confirmed | To be confirmed | Not measured  | Not measured  |
| Barad-dur            | To be confirmed | To be confirmed | Not measured  | Not measured  |
| Moria                | To be confirmed | To be confirmed | Not measured  | Not measured  |
| Raspberry Pi systems | To be confirmed | To be confirmed | Not measured  | Not measured  |


The power budget should be based on measured consumption rather than only the maximum rating printed on each power adapter.

## Weight register

| Device or assembly     | Estimated weight | Measured weight | Position    |
| ------------------------| -----------------:| ----------------:| -------------|
| Rack frame             | To be confirmed  | Not measured    | Entire rack |
| Erebor and mount       | To be confirmed  | Not measured    | U04         |
| Barad-dur and mount    | To be confirmed  | Not measured    | U05         |
| Raspberry Pi and mount | To be confirmed  | Not measured    | U06         |
| Moria and storage      | To be confirmed  | Not measured    | U07-U09     |
| Power equipment        | To be confirmed  | Not measured    | U13         |

Heavier equipment should remain in the lower portion of the rack.

## Service clearances

The installed rack location must provide sufficient clearance for:

> removal of front-mounted trays;
> connection of rear cables;
> replacement of power adapters;
> cleaning of ventilation openings;
> access to the main power switch;
> inspection of structural components.

Record the final clearances after installation.

| Area  | Required clearance | Actual clearance |
| ----- | -----------------: | ---------------: |
| Front |    To be confirmed |     Not measured |
| Rear  |    To be confirmed |     Not measured |
| Left  |    To be confirmed |     Not measured |
| Right |    To be confirmed |     Not measured |
| Above |    To be confirmed |     Not measured |

## Rack inspection checklist

Perform the following checks after assembly and following any significant rack change:

- [ ] All structural fasteners are tight.
- [ ] Printed joints show no cracking.
- [ ] Rack posts show no visible deformation.
- [ ] Device mounts are secure.
- [ ] Heavy equipment is positioned low in the rack.
- [ ] Ventilation openings are unobstructed.
- [ ] Power adapters have adequate airflow.
- [ ] Cables are labelled at both ends.
- [ ] Cables are not under tension.
- [ ] Cable bend radii are acceptable.
- [ ] The rack is stable on its supporting surface.
- [ ] Reserved rack units remain available.
- [ ] The rack-unit allocation table is current.

| Date       | Change                                | Author         |
| ------------| ---------------------------------------| ----------------|
| 2026-07-17 | Initial rack-layout reference created | Project Erebor |
| 2026-07-20 | Added Raspberry Pi to rack            | Project Erebor |
