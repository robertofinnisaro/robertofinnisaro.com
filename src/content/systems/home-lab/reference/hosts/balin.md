---
title: "Balin"
description: "Host reference for Balin, the Raspberry Pi running home automation and printing services."
published: 2026-10-28
updated: 2026-10-29

systemType: automation
referenceType: host

host: balin
order: 108

hardware: []
software: []

tags:
  - Balin
  - Raspberry Pi
  - Home Automation
  - Host

draft: false
---
# Balin

## Overview

**Role:** Home automation

## Current State

**Status:** Active

## Identity

| Property | Value |
|---|---|
| Asset | Balin |
| Hardware | Raspberry Pi 4 |
| Platform | Docker |
| Role | Home automation |

## Services

- **Mosquitto:** MQTT broker for home automation devices
- **govee2mqtt:** bridges Govee devices onto MQTT for Home Assistant
- **Spoolman:** filament spool inventory, used by the 3D printers
- **Dozzle agent:** log monitoring, reporting to Rivendell

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
