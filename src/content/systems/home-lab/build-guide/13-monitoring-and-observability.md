---
title: Monitoring and Observability
description: Collecting metrics, logs and health information across the lab.
published: '2026-06-23'
updated: 2026-10-29
systemType: software
part: 3
chapter: 13
order: 13
estimatedTime: 120 minutes
difficulty: Intermediate
hardware:
- Dell OptiPlex Micro
software:
  - Uptime Kuma
  - Beszel
  - Scrutiny
  - Dozzle
  - What's Up Docker
  - Homepage
  - Glances
tags:
- Monitoring
- Observability
- Uptime Kuma
draft: false
---

# Monitoring and Observability

## Overview

Monitoring answers four questions about the lab: is everything up, how hard is each
machine working, are the disks healthy, and what are the containers saying. Project
Erebor answers each with a small, focused tool, all collected on
[Rivendell](/systems/home-lab/reference/hosts/rivendell/) and linked from a single dashboard.

## Objectives

By the end of this chapter, the reader should be able to:

- Choose the right tool for availability, resources, disk health, logs and updates.
- Understand the agent and hub pattern used across hosts.
- Read the lab's state from one dashboard.
- Recognise the limits of keeping monitoring on a single host.

## The tools

| Question | Tool | Where it runs |
|---|---|---|
| Is it up? | Uptime Kuma | Rivendell |
| How busy is each machine? | Beszel | Hub on Rivendell, agents on hosts |
| Are the disks healthy? | Scrutiny | Web and InfluxDB on Rivendell, collector on Barad-dûr |
| What are the containers logging? | Dozzle | Viewer on Rivendell, agents on Barad-dûr, Balin and Gimli |
| Are images out of date? | What's Up Docker | Rivendell, via read-only socket proxies |
| Where is everything? | Homepage | Rivendell |

## Hubs and agents

Most tools follow the same pattern: a small **agent** on each host collects data and a
**hub** on Rivendell stores and displays it. Adding a host to monitoring means starting
the agents on it, without changing the hub.

- **Beszel** records CPU, memory, disk and network use over time.
- **Scrutiny** reads SMART data from each disk and warns before a failure, storing its
  history in InfluxDB.
- **Dozzle** streams container logs from every host into one viewer, which is usually the
  quickest way to see why a container is restarting.
- **Glances** on Barad-dûr exposes live system statistics for dashboard widgets.

## Availability

**Uptime Kuma** checks each service's web interface and DNS on a schedule and records
when anything stops answering. It sees the lab the way a user does, so it catches
problems that resource graphs miss, such as a container that is running but not
responding.

## One dashboard

**Homepage** is the front door to the lab. It groups every service by purpose (home,
media, infrastructure, network, downloads, monitoring and 3D printing), shows live status
for each host, and links to every web interface.

## Limitations

Every hub runs on Rivendell, which is VM 110 on Erebor. If Rivendell or Erebor is down,
services elsewhere carry on but the lab loses its overview, including the alerts that
would report the outage. A natural next step is
a minimal external check, such as a second Uptime Kuma instance on a Raspberry Pi, that
watches Rivendell itself.

## Verification checklist

- [ ] Every host appears in Beszel.
- [ ] Scrutiny lists every disk with a passing status.
- [ ] Dozzle shows logs from Barad-dûr, Balin, Gimli and Rivendell.
- [ ] Uptime Kuma checks every service listed on Homepage.

## Summary

Small, single-purpose tools cover availability, resources, disks, logs and updates, all
gathered on Rivendell behind one dashboard. The next chapter covers backups.
