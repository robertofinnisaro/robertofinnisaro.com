---
title: "Erebor"
description: "Host reference for Erebor, the primary Proxmox VE compute node in the home lab."
published: 2026-07-20
updated: 2026-10-29

systemType: compute
referenceType: host

host: erebor
order: 101

hardware: []
software: []

tags:
  - Erebor
  - Proxmox
  - Compute
  - Host

draft: false
---
# Erebor

## Overview

**Role:** Primary Proxmox VE host

## Current State

**Status:** Active

## Identity

| Property | Value |
|---|---|
| Asset | Erebor |
| Hardware | Dell OptiPlex 3060 Micro |
| Platform | Proxmox VE |
| Role | Primary Proxmox VE host |

## Services

Erebor runs four virtual machines. See the [Virtual Machine Inventory](/systems/home-lab/reference/vm-inventory/) for resources and placement.

| VM ID | Name | Purpose |
|---|---|---|
| 100 | home-assistant | Home Assistant |
| 110 | docker | [Rivendell](/systems/home-lab/reference/hosts/rivendell/): DNS, dashboard and monitoring |
| 120 | minecraft | Minecraft server |
| 130 | food-services | [Gundabad](/systems/home-lab/reference/hosts/gundabad/): Mealie, Grocy and Food Bridge |

## Storage

| Storage | Type | Used (29 Oct 2026) |
|---|---|---|
| local | Directory storage on the boot disk | 18.4% |
| local-lvm | LVM-thin pool for VM disks | 69.3% |

## Capacity Notes

VM 110 is [Rivendell](/systems/home-lab/reference/hosts/rivendell/), which hosts primary DNS and the
monitoring stack, and VM 130 is [Gundabad](/systems/home-lab/reference/hosts/gundabad/), the food services, so Erebor maintenance should be scheduled with that in mind.

At the 29 October 2026 snapshot the node reported 98.2% memory in use, so Erebor has
little headroom for additional VMs without reallocating memory or adding a second node.

Detailed firmware, BIOS and power settings are recorded in
[Erebor Host Configuration](/systems/home-lab/reference/erebor-host-configuration/).

## Hardware Specification

_To be completed._

## Network Configuration

_To be completed._

## Storage Configuration

_To be completed._

## Rack Position

See [Rack Layout](/systems/home-lab/reference/rack-layout/).

## Validation

See [Hardware Validation Log](/systems/home-lab/reference/hardware-validation-log/).

## Maintenance

See [Maintenance Log](/systems/home-lab/reference/maintenance-log/).

## Change Log

| Date | Change |
|---|---|
| 2026-07-20 | Initial host page created |
| 2026-10-29 | Updated from the deployed services |
