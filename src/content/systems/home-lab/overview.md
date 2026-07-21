---
title: Project Erebor
description: The main self-hosted compute, storage and networking environment.
published: '2026-06-23'
systemType: infrastructure
contentType: overview
order: 1
tags:
- Self Hosting
- Infrastructure
- Home Lab
featured: true
draft: false
---

# Project Erebor

Project Erebor is the umbrella name for the home lab documented in this collection.

The project combines virtualisation, containerised services, network segmentation, centralised storage,
monitoring, automation and disaster recovery into a single maintainable platform.

## Current objectives

- Build a stable Proxmox-based compute platform.
- Migrate existing Docker workloads without unnecessary redesign.
- Introduce structured networking and VLANs.
- Separate compute, storage and routing responsibilities.
- Document every significant implementation and design decision.
- Maintain a practical recovery path for critical services.

## Core systems

| Role                   | Name          | Platform                               |
| ------------------------| ---------------| ----------------------------------------|
| Primary compute node   | Erebor        | Dell OptiPlex Micro running Proxmox VE |
| Secondary compute node | Barad-dur     | Planned Proxmox VE node                |
| Storage platform       | Moria         | Planned ZimaBoard-based NAS            |
| Firewall and router    | Minas Tirith  | Planned OPNsense appliance             |
| Core switch            | Argonath      | Planned managed switch                 |
| Raspberry Pi nodes     | Dwarven names | Lightweight infrastructure services    |

## Reading the project

The **book** documents the complete build in sequence. The **reference** section records the current
operational state of the lab, including addressing, VLANs, virtual machines, storage and backup policy.
