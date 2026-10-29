---
title: "Gundabad"
description: "Host reference for Gundabad, the food-services VM on Erebor running Mealie, Grocy and Food Bridge."
published: 2026-10-29
updated: 2026-10-29

systemType: software
referenceType: host

host: gundabad
order: 111

hardware: []
software: []

tags:
  - Gundabad
  - Food
  - Docker
  - Host

draft: false
---
# Gundabad

## Overview

**Role:** Food services: recipes, meal planning, pantry inventory and shopping lists

The design and history of the food system are told in
[Chapter 12: The Kitchen Is a Distributed System](/systems/home-lab/build-guide/12-food-services/).

## Current State

**Status:** Active. Meal planning and shopping-list reconciliation are working;
purchase intake and cooked-meal stock deduction are not yet built.

## Identity

| Property | Value |
|---|---|
| Asset | Gundabad |
| Hardware | Virtual machine on [Erebor](/systems/home-lab/reference/hosts/erebor/) |
| Proxmox VM | 130 (`food-services`) |
| Operating system | Debian |
| Platform | Docker Compose |
| Role | Food services |

## Services

Three containers, managed together with Docker Compose. Images and ports are listed in
[Docker Services](/systems/home-lab/reference/docker-services/).

- **Mealie:** recipes, the meal plan and the Weekly Shop shopping list
- **Grocy:** pantry inventory: products, stock levels, units, locations and expiry
- **Food Bridge:** custom FastAPI service that maps Mealie ingredients to Grocy products,
  calculates weekly shortages and reconciles the shopping list

Home Assistant on Erebor (VM 100) provides the Food dashboard and triggers
reconciliation; see [Service Dependencies](/systems/home-lab/reference/service-dependencies/).

## Hardware Specification

Gundabad is Proxmox VM 130 on Erebor and has no hardware of its own. Its share of
Erebor's memory and CPU is in the
[Virtual Machine Inventory](/systems/home-lab/reference/vm-inventory/).

## Network Configuration

_To be completed._

## Storage Configuration

Application data lives in the Compose project directory: Mealie's and Grocy's data
folders, and Food Bridge's SQLite database of mappings and generated shopping items.
These hold credentials and household data, so they are backed up but never published.

## Rack Position

Runs inside Erebor; see [Rack Layout](/systems/home-lab/reference/rack-layout/).

## Validation

See [Hardware Validation Log](/systems/home-lab/reference/hardware-validation-log/).

## Maintenance

See [Maintenance Log](/systems/home-lab/reference/maintenance-log/).

## Change Log

| Date | Change |
|---|---|
| 2026-10-29 | Host page created |
