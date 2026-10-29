---
title: "Virtual Machine Inventory"
description: "Inventory of virtual machines and containers, including host placement, resources, network assignments and responsibilities."
published: 2026-07-20
updated: 2026-10-29

systemType: compute
referenceType: inventory

order: 10

hardware: []

software:
  - Proxmox VE 9
  - Linux Containers

tags:
  - Virtual Machines
  - Containers
  - Proxmox
  - Inventory

draft: false
---

# Virtual Machine Inventory

Virtual machines running on the lab's Proxmox VE hosts. Docker containers are listed
separately in [Docker Services](/systems/home-lab/reference/docker-services/).

## Erebor

All current virtual machines run on [Erebor](/systems/home-lab/reference/hosts/erebor/).

| VM ID | Name | Purpose |
|---|---|---|
| 100 | home-assistant | Home Assistant |
| 110 | docker | [Rivendell](/systems/home-lab/reference/hosts/rivendell/): DNS, dashboard and monitoring |
| 120 | minecraft | Minecraft server |
| 130 | food-services | [Gundabad](/systems/home-lab/reference/hosts/gundabad/): Mealie, Grocy and Food Bridge |

## Resource snapshot

Recorded from the Proxmox summary on 29 October 2026. Memory used is the share of each
VM's own allocation in use; host memory is that VM's share of Erebor's physical memory.

| VM | Memory used | Host memory | Host CPU |
|---|---|---|---|
| 100 home-assistant | 91.9% | 27.8% | 0.7% |
| 110 docker (Rivendell) | 70.1% | 19.8% | 1.5% |
| 120 minecraft | 80.1% | 24.9% | 0.4% |
| 130 food-services (Gundabad) | 89.9% | 17.2% | 0.2% |

Together the four VMs account for about 90% of Erebor's memory, and the node reported
98.2% in use overall. CPU load is light, so memory is the constraint on adding further
VMs to Erebor.

## Storage

| Storage | Host | Purpose | Used (29 Oct 2026) |
|---|---|---|---|
| local | Erebor | ISOs, templates and backups on the boot disk | 18.4% |
| local-lvm | Erebor | LVM-thin pool for VM disks | 69.3% |

## Change log

| Date | Change |
|---|---|
| 2026-07-20 | Initial reference page created |
| 2026-10-29 | Added the four Erebor VMs and a resource snapshot |
