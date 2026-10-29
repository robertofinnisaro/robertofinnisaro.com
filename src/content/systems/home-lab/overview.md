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

| Role | Name | Platform | Status |
|---|---|---|---|
| Primary compute node | [Erebor](/systems/home-lab/reference/hosts/erebor/) | Dell OptiPlex 3060 Micro running Proxmox VE | Active |
| Media server | [Barad-dûr](/systems/home-lab/reference/hosts/barad-dur/) | Dell OptiPlex running Docker | Active |
| Primary Docker platform | [Rivendell](/systems/home-lab/reference/hosts/rivendell/) | Docker on Proxmox VM 110 (Erebor) | Active |
| Food services | [Gundabad](/systems/home-lab/reference/hosts/gundabad/) | Docker on Proxmox VM 130 (Erebor) | Active |
| Storage platform | [Moria](/systems/home-lab/reference/hosts/moria/) | ZimaBoard-based NAS | Planned |
| Firewall and router | [Minas Tirith](/systems/home-lab/reference/hosts/minas-tirith/) | OPNsense | Planned |
| Core switch | [Argonath](/systems/home-lab/reference/hosts/argonath/) | Managed switch | Active |
| Network services | [Gimli](/systems/home-lab/reference/hosts/gimli/) | Raspberry Pi 3B | Active |
| Secondary DNS and remote access | [Gloin](/systems/home-lab/reference/hosts/gloin/) | Raspberry Pi 3B | Active |
| Home automation | [Balin](/systems/home-lab/reference/hosts/balin/) | Raspberry Pi 4 | Active |
| Camera node | [Bombur](/systems/home-lab/reference/hosts/bombur/) | Raspberry Pi 1 Model B+ | Active |

## Reading the project

The **Build Guide** documents the complete build in sequence. The **reference** section records the current
operational state of the lab, including addressing, VLANs, virtual machines, storage and backup policy.
