---
title: Docker Platform
description: Building a maintainable Docker host for the lab's containerised services.
published: '2026-06-23'
updated: 2026-10-29
systemType: software
part: 3
chapter: 10
order: 10
estimatedTime: 120 minutes
difficulty: Intermediate
hardware:
- Dell OptiPlex 3060 Micro
software:
  - Docker Engine
  - Docker Compose
  - Portainer
  - Docker Socket Proxy
tags:
- Docker
- Containers
- Self Hosting
draft: false
---

# Docker Platform

## Overview

Most of the lab's services run as Docker containers. Rather than one large Docker host,
Project Erebor spreads containers across several machines by purpose, so that a problem
with one group of services does not take down the rest.

## Objectives

By the end of this chapter, the reader should be able to:

- Explain how containers are divided between hosts and why.
- Install Docker Engine and Compose on a new host.
- Give monitoring tools access to Docker without exposing the Docker socket.
- Handle image updates deliberately rather than automatically.

## Where containers run

| Host | Hardware | Purpose |
|---|---|---|
| [Rivendell](/systems/home-lab/reference/hosts/rivendell/) | Proxmox VM 110 on Erebor | DNS, dashboard and monitoring |
| [Barad-dûr](/systems/home-lab/reference/hosts/barad-dur/) | Dell OptiPlex, 16 GB RAM | Media libraries, requests and downloads |
| [Balin](/systems/home-lab/reference/hosts/balin/) | Raspberry Pi 4 | MQTT, home automation bridges, Spoolman |
| [Gimli](/systems/home-lab/reference/hosts/gimli/) | Raspberry Pi 3B | Reverse proxy and UniFi controller |

The split follows how services fail and how often they change. The media stack on
Barad-dûr is the busiest and the most frequently updated, so it lives on its own host.
The shared services that everything else relies on, DNS and monitoring, sit on
Rivendell, a VM on Erebor, where they can be snapshotted and backed up with Proxmox. Lightweight network and automation services run on Raspberry Pis, where they
keep working when the larger machines are rebooted.

The full container list, with images and ports, is in [Docker Services](/systems/home-lab/reference/docker-services/).

## Installing Docker

Each host runs Docker Engine with the Compose plugin, installed from Docker's own
repository rather than the distribution's older packages. After installation, add the
administrative user to the `docker` group and confirm both tools respond:

```bash
docker version
docker compose version
```

Each group of related services is defined in a Compose file and started with:

```bash
docker compose up -d
```

## Managing containers

[Portainer](/systems/home-lab/reference/hosts/barad-dur/) on Barad-dûr provides a web interface for inspecting
containers, logs and volumes. Day-to-day changes are still made in the Compose files, so
that the files remain the record of how each service is configured.

## Access to the Docker API

Monitoring tools need to read container state, but mounting `/var/run/docker.sock` into a
container gives it full control of the host. Instead, each Docker host runs a
`docker-socket-proxy` container that exposes a read-only subset of the API, bound to
`127.0.0.1` so it is reachable only from the host itself.

What's Up Docker on Rivendell reads container and image information through these
proxies on Rivendell, Barad-dûr and Gimli.

## Image updates

Most images track their `latest` tag. What's Up Docker watches for new images and reports
them, but does not update containers itself. Updates are applied deliberately, one stack
at a time:

```bash
docker compose pull
docker compose up -d
```

Updating by stack keeps the cause of any breakage obvious, and the previous image is
still available locally if a rollback is needed.

## Verification checklist

- [ ] Docker and Compose report their versions on each host.
- [ ] Every stack starts with `docker compose up -d` after a reboot.
- [ ] No monitoring container mounts the Docker socket directly.
- [ ] What's Up Docker lists the containers on every Docker host.

## Summary

Containers are grouped by purpose across four hosts, each defined in Compose files, with
Docker API access limited to read-only socket proxies. The next chapter builds the media
stack on Barad-dûr.
