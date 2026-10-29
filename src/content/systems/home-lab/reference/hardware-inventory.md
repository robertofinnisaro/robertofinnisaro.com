---
title: "Hardware Inventory"
description: "Inventory of physical servers, storage devices, network equipment and supporting hardware used by the home lab."
published: 2026-07-20
updated: 2026-10-29

systemType: infrastructure
referenceType: inventory

order: 2

hardware: []
software: []

tags:
  - Hardware
  - Inventory
  - Infrastructure
  - Asset Management

draft: false
---

# Hardware Inventory

## Current State

| Asset | Hardware | Role | Status | Details |
|---|---|---|---|---|
| Erebor | Dell OptiPlex 3060 Micro | Primary Proxmox VE host | Active | [Host page](/systems/home-lab/reference/hosts/erebor/) |
| Barad-dûr | Dell OptiPlex, 16 GB RAM | Media server | Active | [Host page](/systems/home-lab/reference/hosts/barad-dur/) |
| Rivendell | Proxmox VM 110 on Erebor | Primary Docker platform | Active | [Host page](/systems/home-lab/reference/hosts/rivendell/) |
| Gundabad | Proxmox VM 130 on Erebor | Food services | Active | [Host page](/systems/home-lab/reference/hosts/gundabad/) |
| Moria | ZimaBoard-based NAS | Storage platform | Planned | [Host page](/systems/home-lab/reference/hosts/moria/) |
| Minas Tirith | Firewall appliance | OPNsense firewall | Planned | [Host page](/systems/home-lab/reference/hosts/minas-tirith/) |
| Argonath | Managed switch | Core switch | Active | [Host page](/systems/home-lab/reference/hosts/argonath/) |
| Gimli | Raspberry Pi 3B | Nginx Proxy Manager, UniFi controller | Active | [Host page](/systems/home-lab/reference/hosts/gimli/) |
| Gloin | Raspberry Pi 3B | Pi-hole, Tailscale | Active | [Host page](/systems/home-lab/reference/hosts/gloin/) |
| Balin | Raspberry Pi 4 | Mosquitto, govee2mqtt, Spoolman | Active | [Host page](/systems/home-lab/reference/hosts/balin/) |
| Bombur | Raspberry Pi 1 Model B+ | Camera node | Active | [Host page](/systems/home-lab/reference/hosts/bombur/) |