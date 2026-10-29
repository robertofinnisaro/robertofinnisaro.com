---
title: "Service Dependencies"
description: "Dependencies between network, storage, authentication, proxy, monitoring and application services."
published: 2026-07-20
updated: 2026-10-29

systemType: infrastructure
referenceType: architecture

order: 12

hardware: []

software:
  - Docker
  - OPNsense
  - Proxmox VE 9

tags:
  - Services
  - Dependencies
  - Architecture
  - Recovery Planning

draft: false
---

# Service Dependencies

What each service relies on, so the effect of an outage or maintenance window can be
judged before it happens. Hosts link to their reference pages.

## Network foundations

| Service | Host | Depends on | Used by |
|---|---|---|---|
| Routing and firewall | [Minas Tirith](/systems/home-lab/reference/hosts/minas-tirith/) | Internet connection | Everything |
| Primary DNS (AdGuard Home) | [Rivendell](/systems/home-lab/reference/hosts/rivendell/) | Minas Tirith | All clients |
| Secondary DNS (Pi-hole) | [Gloin](/systems/home-lab/reference/hosts/gloin/) | Minas Tirith | All clients, when AdGuard is unavailable |
| Remote access (Tailscale) | [Gloin](/systems/home-lab/reference/hosts/gloin/) | Internet connection | Remote administration |
| Reverse proxy (Nginx Proxy Manager) | [Gimli](/systems/home-lab/reference/hosts/gimli/) | DNS | Web interfaces published by name |
| Wireless controller (UniFi) | [Gimli](/systems/home-lab/reference/hosts/gimli/) | Network | Eriador access points |

Because DNS runs on two different hosts, Rivendell or Gloin can be restarted without
clients losing name resolution.

## Home automation

| Service | Host | Depends on |
|---|---|---|
| Home Assistant | [Erebor](/systems/home-lab/reference/hosts/erebor/), VM 100 | Mosquitto, DNS |
| Mosquitto (MQTT) | [Balin](/systems/home-lab/reference/hosts/balin/) | Network |
| govee2mqtt | [Balin](/systems/home-lab/reference/hosts/balin/) | Mosquitto |

Erebor maintenance takes Home Assistant offline; MQTT devices keep publishing to
Mosquitto on Balin and reconnect when it returns.

## Food

| Service | Host | Depends on |
|---|---|---|
| Mealie | [Gundabad](/systems/home-lab/reference/hosts/gundabad/), VM 130 | DNS |
| Grocy | Gundabad | DNS |
| Food Bridge | Gundabad | Mealie, Grocy |
| Food dashboard | Home Assistant, VM 100 | Food Bridge, Mealie integration |

Food Bridge reconciles the shopping list every ten minutes and after a meal is planned
from the dashboard. If either Mealie or Grocy is unavailable, the list is not updated; it
catches up on the next successful run.

## 3D printing

| Service | Host | Depends on |
|---|---|---|
| Glaurung (Klipper, Moonraker) | Printer controller | Spoolman for filament tracking |
| Spoolman | [Balin](/systems/home-lab/reference/hosts/balin/) | Network |
| Bambu Lab A1 camera | [Bombur](/systems/home-lab/reference/hosts/bombur/) | Network |

## Media

| Service | Host | Depends on |
|---|---|---|
| Seerr | [Barad-dûr](/systems/home-lab/reference/hosts/barad-dur/) | Sonarr, Radarr, Jellyfin |
| Sonarr, Radarr | Barad-dûr | Prowlarr, qBittorrent, SABnzbd, media storage |
| Prowlarr | Barad-dûr | Byparr |
| Bazarr | Barad-dûr | Sonarr, Radarr |
| Jellyfin, Kavita, Audiobookshelf | Barad-dûr | Media storage |

## Monitoring

| Service | Host | Collects from |
|---|---|---|
| Uptime Kuma | Rivendell | Service endpoints across the lab |
| Beszel | Rivendell | Beszel agents |
| Scrutiny | Rivendell | Scrutiny collector on Barad-dûr |
| Dozzle | Rivendell | Dozzle agents on Barad-dûr, Balin and Gimli |
| What's Up Docker | Rivendell | Socket proxies on Rivendell, Barad-dûr and Gimli |
| Homepage | Rivendell | Links and status for every service |

Rivendell is the single point of failure for monitoring and the dashboard: if it is
down, services keep running but the lab loses its overview. Rivendell is itself VM 110
on Erebor, so restarting Erebor also stops Home Assistant (VM 100), primary DNS, all
monitoring and the food services on Gundabad (VM 130) at once. Pi-hole on Gloin and the services on Barad-dûr and the Raspberry Pis
are unaffected.

## Change log

| Date | Change |
|---|---|
| 2026-07-20 | Initial reference page created |
| 2026-10-29 | Rebuilt from the deployed services |
