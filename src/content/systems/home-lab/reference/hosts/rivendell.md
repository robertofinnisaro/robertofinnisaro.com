---
title: "Rivendell"
description: "Host reference for Rivendell, the Docker VM on Erebor that runs DNS, dashboards and monitoring."
published: 2026-10-29
updated: 2026-10-29

systemType: software
referenceType: host

host: rivendell
order: 109

hardware: []
software: []

tags:
  - Rivendell
  - Docker
  - Monitoring
  - Host

draft: false
---
# Rivendell

## Overview

**Role:** Primary Docker platform

## Current State

**Status:** Active

## Identity

| Property | Value |
|---|---|
| Asset | Rivendell |
| Hardware | Virtual machine on [Erebor](/systems/home-lab/reference/hosts/erebor/) |
| Proxmox VM | 110 (`docker`) |
| Platform | Docker |
| Role | Primary Docker platform |

## Services

Ten containers providing the lab's shared services. Images and ports are listed in [Docker Services](/systems/home-lab/reference/docker-services/).

- **DNS:** AdGuard Home (primary DNS)
- **Dashboard:** Homepage
- **Monitoring:** Uptime Kuma, Beszel and Beszel agent, Scrutiny web and InfluxDB, Dozzle
- **Updates:** What's Up Docker, with a local Docker socket proxy


## Hardware Specification

Rivendell is Proxmox VM 110 on Erebor, so it has no hardware of its own. Its share of
Erebor's memory and CPU, from the 29 October 2026 snapshot, is in the
[Virtual Machine Inventory](/systems/home-lab/reference/vm-inventory/).

Because it is a VM, Rivendell restarts whenever Erebor does. Erebor maintenance
therefore takes primary DNS and the whole monitoring stack offline with it; Pi-hole on
[Gloin](/systems/home-lab/reference/hosts/gloin/) keeps name resolution working in the meantime.

## Network Configuration

_To be completed._

## Storage Configuration

_To be completed._

## Rack Position

Runs inside Erebor; see [Rack Layout](/systems/home-lab/reference/rack-layout/).

## Validation

See [Hardware Validation Log](/systems/home-lab/reference/hardware-validation-log/).

## Maintenance

See [Maintenance Log](/systems/home-lab/reference/maintenance-log/).

## Change Log

| Date | Change |
|---|---|
| 2026-07-20 | Initial host page created |
| 2026-10-29 | Updated from the deployed services |
| 2026-10-29 | Confirmed as Proxmox VM 110 on Erebor |
