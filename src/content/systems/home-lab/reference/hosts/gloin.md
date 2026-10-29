---
title: "Gloin"
description: "Host reference for Gloin, the Raspberry Pi providing secondary DNS and remote access."
published: 2026-07-20
updated: 2026-10-29

systemType: network
referenceType: host

host: gloin
order: 105

hardware: []
software: []

tags:
  - Gloin
  - Raspberry Pi
  - DNS
  - Host

draft: false
---
# Gloin

## Overview

**Role:** Network node

## Current State

**Status:** Active

## Identity

| Property | Value |
|---|---|
| Asset | Gloin |
| Hardware | Raspberry Pi 3B |
| Platform | Raspberry Pi OS (no Docker) |
| Role | Network node |

## Services

- **Pi-hole:** secondary DNS, alongside AdGuard Home on Rivendell
- **Tailscale:** remote access into the lab

Gloin runs these directly on the operating system rather than in containers.


## Hardware Specification

_To be completed._

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
