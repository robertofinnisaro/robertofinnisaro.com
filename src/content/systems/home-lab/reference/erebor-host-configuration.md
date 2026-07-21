---
title: Erebor Host Configuration
description: The current firmware, BIOS, hardware and power configuration of the Erebor Proxmox host.
published: '2026-07-20'
systemType: compute
contentType: reference
order: 1
hardware:
- Dell OptiPlex 3060 Micro
software:
- Dell BIOS
- Proxmox VE 9
tags:
- Erebor
- BIOD
- Proxmox
- Compute
- Host Configuration
draft: false
---

This page records the current deployed configuration of Erebor.

The preparation process is described in
[Preparing Erebor](/systems/home-lab/build-guide/03-preparing-erebor/).

> **Document role:** Operational reference  
> **Host:** Erebor  
> **Role:** Primary Proxmox compute node  
> **Last physically verified:** Not yet recorded  
> **Current status:** Preparation

## Host identity

| Property | Value |
|---|---|
| Host name | Erebor |
| Asset ID | CMP-001 |
| Manufacturer | Dell |
| Model | OptiPlex 3060 Micro |
| Service tag | Stored privately |
| Role | Primary Proxmox node |
| Physical location | See [Rack Layout](./rack-layout/) |
| Rack position | To be confirmed |

## Processor

| Property               | Value           |
| ------------------------| -----------------|
| Processor model        | To be confirmed |
| Core count             | To be confirmed |
| Thread count           | To be confirmed |
| Base frequency         | To be confirmed |
| Maximum frequency      | To be confirmed |
| Virtualisation support | To be confirmed |
| VT-d support           | To be confirmed |

## Memory

| Slot | Module | Capacity | Speed | Manufacturer | Part number |
|---|---|---:|---:|---|---|
| Slot 1 | To be confirmed | | | | |
| Slot 2 | To be confirmed | | | | |

| Property | Value |
|---|---|
| Total memory | To be confirmed |
| Maximum supported memory | To be confirmed |
| Memory test status | See [Hardware Validation Log](./hardware-validation-log/) |

## Storage

| Device | Model | Capacity | Interface | Firmware | Role |
|---|---|---:|---|---|---|
| Disk 1 | To be confirmed | | | | Proxmox system disk |

Sensitive serial numbers should not be published.

## Network interfaces

| Interface | Hardware            | Speed           | MAC handling     | Role                          |
| -----------| ---------------------| ----------------:| ------------------| -------------------------------|
| NIC 1     | Integrated Ethernet | To be confirmed | Stored privately | Proxmox management and bridge |

The logical bridge and VLAN configuration will be recorded in the network references.

## Firmware

| Property | Value |
|---|---|
| BIOS version | To be confirmed |
| BIOS release date | To be confirmed |
| BIOS update date | To be confirmed |
| Previous BIOS version | To be confirmed |
| Firmware update method | To be confirmed |

## BIOS settings

| Setting | Deployed value | Reason |
|---|---|---|
| Boot mode | UEFI | Modern boot mode |
| Legacy boot | Disabled | Avoid mixed boot configuration |
| Secure Boot | To be confirmed | Installation policy |
| Intel Virtualization Technology | Enabled | Required for KVM virtual machines |
| Intel VT-d | Enabled | Required for I/O virtualisation |
| Storage controller mode | To be confirmed | Proxmox storage compatibility |
| AC recovery | Power On | Automatic return after power failure |
| Wake-on-LAN | To be confirmed | Remote recovery |
| Deep sleep | To be confirmed | Wake and power behaviour |
| USB boot | Enabled during installation | Installation and recovery |
| Integrated NIC | Enabled | Host connectivity |
| Wireless adapter | To be confirmed | Unused or retained |
| Bluetooth | To be confirmed | Unused or retained |
| Audio | To be confirmed | Unused or retained |
| Firmware password | Stored privately if configured | Access control |

## Power configuration

| Property | Value |
|---|---|
| Power-adapter model | To be confirmed |
| Rated voltage | To be confirmed |
| Rated current | To be confirmed |
| Rated wattage | To be confirmed |
| Idle power | Not measured |
| Typical power | Not measured |
| Maximum observed power | Not measured |
| UPS-backed | To be confirmed |
| AC recovery tested | No |

## Thermal configuration

| Property | Value |
|---|---|
| Fan condition | To be confirmed |
| Heatsink cleaned | To be confirmed |
| Thermal paste replaced | To be confirmed |
| Thermal paste type | To be confirmed |
| Service date | To be confirmed |

## Temperature baseline

| Test condition | CPU | Storage | Ambient | Date |
|---|---:|---:|---:|---|
| Firmware idle | | | | |
| Operating-system idle | | | | |
| Sustained CPU load | | | | |
| Combined load | | | | |

## Physical configuration

| Property          | Value                          |
| -------------------| --------------------------------|
| Mount ID          | To be confirmed                |
| Mount revision    | To be confirmed                |
| Rack units        | To be confirmed                |
| Orientation       | To be confirmed                |
| Intake clearance  | To be confirmed                |
| Exhaust clearance | To be confirmed                |
| Service direction | Front or rear, to be confirmed |

## Recovery behaviour

| Test | Expected behaviour | Verified |
|---|---|---|
| AC power restored | Host powers on automatically | No |
| Wake-on-LAN | Host powers on remotely | No |
| Boot device missing | Firmware displays recoverable error | No |
| USB recovery boot | UEFI USB device starts | No |

## Configuration-change log

| Date       | Change                                  | Reason                |
| ------------| -----------------------------------------| -----------------------|
| 2026-07-20 | Initial configuration reference created | Project documentation |