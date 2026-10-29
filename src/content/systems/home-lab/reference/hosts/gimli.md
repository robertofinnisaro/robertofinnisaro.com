---
title: "Gimli"
description: "Host reference for Gimli, the Raspberry Pi running the reverse proxy and UniFi controller."
published: 2026-07-20
updated: 2026-10-29

systemType: network
referenceType: host

host: gimli
order: 104

hardware: []
software: []

tags:
  - Gimli
  - Raspberry Pi
  - Network
  - Host

draft: false
---
# Gimli

## Overview

**Role:** Network services

## Current State

**Status:** Active

## Identity

| Property | Value |
|---|---|
| Asset | Gimli |
| Hardware | Raspberry Pi 3B |
| Platform | Docker |
| Role | Network services |

## Services

- **Nginx Proxy Manager:** reverse proxy and TLS for the lab's web services
- **UniFi Network Application:** controller for the Eriador wireless network
- **Dozzle agent** and **WUD socket proxy:** log and update monitoring, reporting to Rivendell

Images and ports are listed in [Docker Services](/systems/home-lab/reference/docker-services/).


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
