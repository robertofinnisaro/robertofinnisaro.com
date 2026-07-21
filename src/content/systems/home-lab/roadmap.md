---
title: Roadmap
description: The planned implementation sequence and future development of Project Erebor.
published: '2026-06-23'
systemType: infrastructure
contentType: overview
order: 3
tags:
- Planning
- Roadmap
- Home Lab
featured: false
draft: false
---

# Roadmap

The lab is being built incrementally so each stage remains usable before the next stage begins.

## Phase 1 — First compute node

- Prepare Erebor.
- Install and configure Proxmox VE.
- Create an Ubuntu Server template.
- Deploy the first Docker and Home Assistant workloads.
- Establish local backups.

## Phase 2 — Network foundation

- Install the managed switch.
- Define the VLAN and addressing plan.
- Introduce tagged and untagged switch ports.
- Migrate infrastructure services onto stable addresses.

## Phase 3 — Storage and edge

- Deploy Moria as central storage.
- Add OPNsense on Minas Tirith.
- Move routing, DHCP and inter-VLAN policy to OPNsense.
- Add resilient DNS and remote-access services.

## Phase 4 — Expansion

- Add Barad-dur as the second Proxmox node.
- Introduce centralised backups.
- Add monitoring, logging and alerting.
- Test recovery procedures.
