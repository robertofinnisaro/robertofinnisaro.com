---
title: "Barad-d\u00fbr"
description: "Host reference for Barad-d\u00fbr, the media server running the download, library and request stack."
published: 2026-07-20
updated: 2026-10-29

systemType: compute
referenceType: host

host: barad-dur
order: 103

hardware: []
software: []

tags:
  - Barad-dur
  - Media
  - Docker
  - Host

draft: false
---
# Barad-dûr

## Overview

**Role:** Media server

## Current State

**Status:** Active

## Identity

| Property | Value |
|---|---|
| Asset | Barad-dûr |
| Hardware | Dell OptiPlex |
| Memory | 16 GB |
| Platform | Docker |
| Role | Media server |

## Services

Sixteen containers, grouped by purpose. Images and ports are listed in [Docker Services](/systems/home-lab/reference/docker-services/).

- **Media libraries:** Jellyfin, Kavita, Audiobookshelf
- **Requests:** Seerr
- **Library automation:** Sonarr, Radarr, Bazarr, Prowlarr, Byparr
- **Downloads:** qBittorrent, SABnzbd
- **Management and monitoring:** Portainer, Glances, Scrutiny collector, Dozzle agent, WUD socket proxy


## Hardware Specification

| Component | Value |
|---|---|
| System | Dell OptiPlex |
| Memory | 16 GB |

Other components are to be completed.

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
| 2026-10-29 | Hardware confirmed: Dell OptiPlex, 16 GB RAM |
