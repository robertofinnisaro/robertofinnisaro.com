---
title: Home Assistant
description: Deploying Home Assistant and planning integrations, backups and device passthrough.
published: '2026-06-23'
updated: 2026-10-29
systemType: automation
part: 3
chapter: 9
order: 9
estimatedTime: 90 minutes
difficulty: Intermediate
hardware:
- Dell OptiPlex 3060 Micro
- USB Zigbee Coordinator
software:
  - Home Assistant
  - Proxmox VE 9
  - Mosquitto
  - govee2mqtt
tags:
- Home Assistant
- Automation
- Virtualisation
draft: false
---

# Home Assistant

## Overview

Home Assistant is the control plane for the house: its devices, automations and the
dashboards in each room all run through it. In Project Erebor it runs as its own virtual
machine on Erebor, while the messaging it depends on lives on a separate Raspberry Pi.

## Objectives

By the end of this chapter, the reader should be able to:

- Explain why Home Assistant runs as a dedicated virtual machine.
- Understand the role of MQTT and where the broker should live.
- Bring devices without native support into Home Assistant through a bridge.
- Verify that automation survives maintenance on the hypervisor.

## Why a dedicated virtual machine

Home Assistant runs as VM 100 (`home-assistant`) on [Erebor](/systems/home-lab/reference/hosts/erebor/). Giving it a
whole VM rather than a container keeps its add-ons, backups and upgrades self-contained,
and lets Proxmox snapshot it before every major update. It is the largest consumer of
memory on Erebor: at the last snapshot it used 91.9% of its allocation and 27.8% of the
host's memory (see the [Virtual Machine Inventory](/systems/home-lab/reference/vm-inventory/)).

## MQTT on a separate host

Many devices talk to Home Assistant through MQTT, a lightweight publish and subscribe
protocol. The broker, Mosquitto, runs on [Balin](/systems/home-lab/reference/hosts/balin/), a Raspberry Pi 4, rather
than inside the Home Assistant VM.

Separating the two means devices keep publishing while Erebor is down for maintenance.
When Home Assistant comes back it reconnects to the broker and picks up the current
state, instead of every device losing its connection at once.

Mosquitto listens on port 1883 for MQTT and 9001 for MQTT over WebSockets.

## Bridging devices without native support

Govee devices are brought in through `govee2mqtt`, which runs alongside
Mosquitto on Balin. It translates Govee's own protocol into MQTT topics that Home
Assistant discovers automatically, so the devices appear as ordinary entities.

## Dashboards

Each room has its own dashboard (for example the bedroom and living room) and the lab has
one of its own. They are linked from the lab's [Homepage](/systems/home-lab/reference/docker-services/) dashboard
on Rivendell, so the house and the infrastructure are reached from the same place.

## Verification checklist

- [ ] Home Assistant starts automatically with Erebor.
- [ ] A Proxmox snapshot is taken before each Home Assistant upgrade.
- [ ] MQTT devices reconnect after Home Assistant restarts.
- [ ] Govee devices appear as entities through `govee2mqtt`.

## Summary

Home Assistant gets a VM of its own on Erebor, while MQTT runs on Balin so that devices
are not tied to the hypervisor's maintenance windows. The next chapter builds the Docker
platform that hosts most of the lab's other services.
