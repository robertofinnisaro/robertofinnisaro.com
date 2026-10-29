---
title: "Naming Conventions"
description: "Hostname, virtual-machine, container, service and network naming conventions used throughout the home lab."
published: 2026-07-20
updated: 2026-10-29

systemType: infrastructure
referenceType: architecture

order: 4

hardware: []
software: []

tags:
  - Naming
  - Hostnames
  - Standards
  - Documentation

draft: false
---

# Naming Conventions

Hosts and networks take names from Middle-earth, so each name says what kind of thing
it is. A virtual machine that is a host in its own right, such as Rivendell or
Gundabad, takes a themed hostname too; its Proxmox VM name, and the names of containers
and services, stay descriptive so their purpose is obvious in logs and tooling.

## Places for infrastructure

| Name | Kind | Role |
|---|---|---|
| [Erebor](/systems/home-lab/reference/hosts/erebor/) | Server | Primary Proxmox VE node |
| [Barad-dûr](/systems/home-lab/reference/hosts/barad-dur/) | Server | Media server |
| [Rivendell](/systems/home-lab/reference/hosts/rivendell/) | Docker VM on Erebor | DNS, dashboard and monitoring |
| [Gundabad](/systems/home-lab/reference/hosts/gundabad/) | Docker VM on Erebor | Food services |
| [Moria](/systems/home-lab/reference/hosts/moria/) | Storage | Storage platform |
| [Minas Tirith](/systems/home-lab/reference/hosts/minas-tirith/) | Firewall | Routing and firewall |
| [Argonath](/systems/home-lab/reference/hosts/argonath/) | Switch | Core switching |
| Eriador | Wireless network | UniFi Wi-Fi |

## Dwarves for Raspberry Pis

| Name | Role |
|---|---|
| [Gimli](/systems/home-lab/reference/hosts/gimli/) | Network services |
| [Gloin](/systems/home-lab/reference/hosts/gloin/) | Secondary DNS and remote access |
| [Balin](/systems/home-lab/reference/hosts/balin/) | Home automation |
| [Bombur](/systems/home-lab/reference/hosts/bombur/) | Camera node |

## Dragons for 3D printers

| Name | Machine |
|---|---|
| [Glaurung](/printing/printers/ender-3-v2-corexy/) | Ender 3 V2 converted to CoreXY |

## Descriptive names

- **Virtual machines:** what they run, in lowercase with hyphens, e.g. `home-assistant`,
  `docker`, `food-services`.
- **Containers:** the service name, e.g. `jellyfin`, `adguard`; helpers take the service
  they support as a prefix, e.g. `scrutiny-collector`, `wud-socket-proxy`.
- **Dashboard entries:** the themed host name with a plain description underneath,
  e.g. "Balin · Home automation".

## Change log

| Date | Change |
|---|---|
| 2026-07-20 | Initial reference page created |
| 2026-10-29 | Documented the naming scheme in use |
