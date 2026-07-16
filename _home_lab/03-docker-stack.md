---
title: Active Container Stack
description: Running Docker services across infrastructure nodes.
order: 3
layout: post
---

## Core Infrastructure

### Network & Gateway

- **AdGuard Home** — DNS filtering and network-level protection
- **Pi-Hole** - DNS filtering and network-level protection
- **UniFi Network Application** — Network controller
- **MongoDB (UniFi backend)**

### Container Management

- **Portainer** — Container orchestration interface

---

## Automation Backbone

- **Home Assistant** — Core automation platform
- **MQTT (Mosquitto)** — Message broker
- **Node-RED** — Flow-based automation logic
- **Hass Configurator** — Configuration interface

---

## Monitoring & Telemetry

- **Glances** — System resource monitoring

---

## IoT & Device Integrations

- **Govee2MQTT** — Lighting device integration

---

## Media & Surveillance

- **Jellyfin** — Media server
- **Sonarr** — TV series automation
- **Radarr** — Film automation
- **Frigate** — AI-based video surveillance

---

## Fabrication & Tooling

- **OrcaSlicer** — 3D printing workflow
- **Spoolman** — Filament management

---

## Observations

- Node-RED currently marked *unhealthy*
- OrcaSlicer container exited (inactive)