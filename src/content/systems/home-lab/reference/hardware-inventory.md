---
title: "Hardware Inventory"
description: "Inventory of physical servers, storage devices, network equipment and supporting hardware used by the home lab."
published: 2026-07-20

systemType: infrastructure
contentType: reference
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

| Asset        | Type            | Role                            | Status  | Details               |
| --------------| -----------------| ---------------------------------| ---------| -----------------------|
| Erebor       | Compute         | Primary Proxmox VE Host         | Active  | hosts/erebor.md       |
| Barad-dur    | Compute         | Media Services Host             | Planned | hosts/barad-dur.md    |
| Moria        | Storage         | NAS & Media Storage             | Planned | hosts/moria.md        |
| Gimli        | Raspberry Pi 4B | Pi-hole                         | Planned | hosts/gimli.md        |
| Gloin        | Raspberry Pi 4B | Tailscale & Nginx Proxy Manager | Planned | hosts/gloin.md        |
| Argonath     | Network         | Managed Switch                  | Planned | hosts/argonath.md     |
| Minas Tirith | Network         | OPNsense Firewall               | Planned | hosts/minas-tirith.md |
