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

## Current topology

```text
Internet
   |
Minas Tirith            Firewall and router
   |
Argonath                Core switch
   |
   +-- Erebor           Proxmox VE
   |     +-- VM 100     home-assistant
   |     +-- VM 110     docker: Rivendell, DNS, dashboard and monitoring
   |     +-- VM 120     minecraft
   |     +-- VM 130     food-services: Gundabad, recipes, pantry and shopping
   |
   +-- Barad-dur        Media server (Docker)
   +-- Moria            Storage platform
   |
   +-- Gimli            Reverse proxy, UniFi controller      Raspberry Pi 3B
   +-- Gloin            Pi-hole, Tailscale                   Raspberry Pi 3B
   +-- Balin            MQTT, govee2mqtt, Spoolman           Raspberry Pi 4
   +-- Bombur           Printer camera                       Raspberry Pi 1 Model B+
   |
   +-- Eriador          UniFi wireless network
```

Service placement is recorded in [Docker Services](/systems/home-lab/reference/docker-services/)
and [Service Dependencies](/systems/home-lab/reference/service-dependencies/).

## Design principles

- Prefer simple, recoverable designs over unnecessary complexity.
- Keep workloads descriptive even when physical devices use themed names.
- Avoid making storage, routing and compute depend on a single failure domain where practical.
- Plan for expansion without requiring the first node to be rebuilt.
- Treat documentation as part of the infrastructure.
