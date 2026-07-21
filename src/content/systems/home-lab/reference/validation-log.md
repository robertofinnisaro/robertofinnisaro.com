---
title: "System Validation Log"
description: "Functional, network, storage, service and recovery validation results recorded during home-lab deployment."
published: 2026-07-20

systemType: infrastructure
contentType: reference
referenceType: validation

order: 9

hardware: []

software:
  - Proxmox VE 9
  - OPNsense

tags:
  - Validation
  - Testing
  - Deployment
  - Quality Assurance

draft: false
---

This page records hardware validation performed before and during operation of Project Erebor systems.

The preparation procedure is described in
[Preparing Erebor](/systems/home-lab/build-guide/03-preparing-erebor/).

## Validation policy

A host must not enter production while it has:

- unresolved memory errors;
- failing storage health indicators;
- repeated thermal shutdowns;
- unstable network hardware;
- unexplained diagnostic failures;
- damaged cooling components.

Asset        Test                  Result

Erebor

✓ Dell Diagnostics
✓ MemTest86
✓ SMART
✓ CPU Stress
✓ AC Recovery

──────────────────────

Orthanc

✓ Dell Diagnostics
✓ MemTest86
✓ SMART

──────────────────────

Moria

✓ SMART
✓ RAID Test
✓ SMB Throughput
✓ NFS Throughput

──────────────────────

Gimli

✓ Burn-in
✓ Temperature
✓ Network

──────────────────────

Argonath

✓ Firmware
✓ VLAN Verification

──────────────────────

Minas Tirith

✓ WAN Failover
✓ Firewall Rules
✓ DNS
✓ DHCP

## Test log

| Date       | Host   | Test                   | Result         | Follow-up                |
| ------------| --------| ------------------------| ----------------| --------------------------|
| 2026-07-20 | Erebor | Validation log created | Not applicable | Complete initial testing |