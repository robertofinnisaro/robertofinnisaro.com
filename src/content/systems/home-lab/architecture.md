---
title: Architecture
description: The logical and physical architecture of Project Erebor.
published: '2026-06-23'
systemType: infrastructure
contentType: overview
order: 2
tags:
- Architecture
- Networking
- Virtualisation
featured: true
draft: false
---

# Architecture

Project Erebor is designed as a layered platform rather than a collection of unrelated devices.

## Architectural layers

1. **Edge and routing** — internet access, firewalling, DHCP, DNS forwarding and inter-VLAN routing.
2. **Switching** — wired connectivity, VLAN transport and device segmentation.
3. **Compute** — Proxmox hosts providing virtual machines and isolated workloads.
4. **Storage** — shared media, backups, archives and long-lived data.
5. **Services** — Home Assistant, Docker applications, monitoring, media and automation.
6. **Operations** — patching, backup verification, observability and disaster recovery.

## Target topology

```text
Internet
   |
ISP modem or router
   |
Minas Tirith
OPNsense firewall
   |
Argonath
Managed switch
   |
   +-- Erebor      Primary Proxmox node
   +-- Orthanc     Secondary Proxmox node
   +-- Moria       NAS and backup storage
   +-- Dwarven Pis Lightweight infrastructure
   +-- Access points and client networks
```

## Design principles

- Prefer simple, recoverable designs over unnecessary complexity.
- Keep workloads descriptive even when physical devices use themed names.
- Avoid making storage, routing and compute depend on a single failure domain where practical.
- Plan for expansion without requiring the first node to be rebuilt.
- Treat documentation as part of the infrastructure.
