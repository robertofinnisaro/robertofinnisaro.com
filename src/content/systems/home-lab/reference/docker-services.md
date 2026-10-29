---
title: "Docker Services"
description: "Inventory and configuration summary for containerised applications running within the home lab."
published: 2026-07-20
updated: 2026-10-29

systemType: software
referenceType: software

order: 11

hardware: []

software:
  - Docker
  - Docker Compose

tags:
  - Docker
  - Containers
  - Services
  - Self Hosting

draft: false
---

# Docker Services

Containers running across the lab, by host. Ports are the host ports published by each
container; containers with no published ports are reached only from the host or over
the host network. Recorded from `docker ps` on 29 October 2026.

## Barad-dûr: media server

[Barad-dûr](/systems/home-lab/reference/hosts/barad-dur/) runs the media libraries and the automation that feeds them.

| Container | Image | Purpose | Ports (host → container) |
|---|---|---|---|
| jellyfin | jellyfin/jellyfin | Film and television streaming | 8096 |
| kavita | jvmilazz0/kavita | Books and comics library | 5000 |
| audiobookshelf | ghcr.io/advplyr/audiobookshelf | Audiobooks and podcasts | 13378 → 80 |
| seerr | ghcr.io/seerr-team/seerr | Media requests | 5055 |
| sonarr | lscr.io/linuxserver/sonarr | Television library automation | 8989 |
| radarr | lscr.io/linuxserver/radarr | Film library automation | 7878 |
| bazarr | lscr.io/linuxserver/bazarr | Subtitles | 6767 |
| prowlarr | lscr.io/linuxserver/prowlarr | Indexer management | 9696 |
| byparr | ghcr.io/thephaseless/byparr | Challenge solver for Prowlarr indexers | 8191 |
| qbittorrent | lscr.io/linuxserver/qbittorrent | Torrent client | 8080, 6881 tcp/udp |
| sabnzbd | lscr.io/linuxserver/sabnzbd | Usenet client | 8085 → 8080 |
| portainer | portainer/portainer-ce | Container management | 8000, 9443 |
| glances | nicolargo/glances | System statistics | 61208 |
| scrutiny-collector | ghcr.io/analogj/scrutiny (collector) | Disk SMART collection, sent to Rivendell | — |
| dozzle-agent | amir20/dozzle | Log agent for Dozzle on Rivendell | 7007 |
| wud-socket-proxy | tecnativa/docker-socket-proxy | Read-only Docker API for What's Up Docker | 127.0.0.1:2375 |

## Rivendell: shared services

[Rivendell](/systems/home-lab/reference/hosts/rivendell/) runs DNS, the dashboard and the monitoring stack.

| Container | Image | Purpose | Ports (host → container) |
|---|---|---|---|
| adguard | adguard/adguardhome | Primary DNS with filtering | 53 tcp/udp, 80, 443, 853, 3002 → 3000 |
| homepage | ghcr.io/gethomepage/homepage | Lab dashboard | 3000 |
| uptime-kuma | louislam/uptime-kuma:2 | Availability monitoring | 3001 |
| beszel | henrygd/beszel | Server monitoring hub | 8090 |
| beszel-agent | henrygd/beszel-agent | Beszel agent for this host | — |
| scrutiny-web | ghcr.io/analogj/scrutiny (web) | Disk health dashboard | 8086 → 8080 |
| scrutiny-influxdb | influxdb:2.2 | Time-series store for Scrutiny | — |
| dozzle | amir20/dozzle | Container log viewer across hosts | 8080 |
| wud | getwud/wud | What's Up Docker: image update monitoring | — |
| wud-local-socket-proxy | tecnativa/docker-socket-proxy | Read-only Docker API for WUD on this host | 127.0.0.1:23750 → 2375 |

## Balin: home automation

[Balin](/systems/home-lab/reference/hosts/balin/) runs the MQTT broker and printing services.

| Container | Image | Purpose | Ports (host → container) |
|---|---|---|---|
| mosquitto | eclipse-mosquitto | MQTT broker | 1883, 9001 |
| govee2mqtt | ghcr.io/wez/govee2mqtt | Govee devices to MQTT and Home Assistant | — |
| spoolman | ghcr.io/donkie/spoolman | Filament spool inventory | 7912 → 8000 |
| dozzle-agent | amir20/dozzle | Log agent for Dozzle on Rivendell | 7007 |

## Gimli: network services

[Gimli](/systems/home-lab/reference/hosts/gimli/) runs the reverse proxy and wireless controller.

| Container | Image | Purpose | Ports (host → container) |
|---|---|---|---|
| nginx-proxy-manager | jc21/nginx-proxy-manager | Reverse proxy and TLS | 80, 81, 443 |
| unifi | jacobalberty/unifi | UniFi Network Application for the Eriador wireless network | — |
| dozzle-agent | amir20/dozzle | Log agent for Dozzle on Rivendell | 7007 |
| wud-socket-proxy | tecnativa/docker-socket-proxy | Read-only Docker API for What's Up Docker | 127.0.0.1:2375 |

## Gundabad: food services

[Gundabad](/systems/home-lab/reference/hosts/gundabad/) runs the food system as one Compose project.

| Container | Image | Purpose | Ports (host → container) |
|---|---|---|---|
| mealie | ghcr.io/mealie-recipes/mealie | Recipes, meal plan and Weekly Shop list | 9925 → 9000 |
| grocy | lscr.io/linuxserver/grocy | Pantry inventory and stock | 9283 → 80 |
| food-bridge | Built locally (FastAPI) | Ingredient mapping and shopping-list reconciliation | 8787 → 8080 |

## Hosts without Docker

[Gloin](/systems/home-lab/reference/hosts/gloin/) runs Pi-hole and Tailscale directly on the operating system.

## Notes

- Most images track the `latest` tag. What's Up Docker reports new images rather than updating
  them automatically, so upgrades stay a deliberate step.
- Each Docker host exposes its API to WUD only through a read-only socket proxy bound to
  `127.0.0.1`, rather than mounting the Docker socket into the monitoring containers.

## Change log

| Date | Change |
|---|---|
| 2026-07-20 | Initial reference page created |
| 2026-10-29 | Added container inventories for Barad-dûr, Rivendell, Balin and Gimli |
| 2026-10-29 | Added Gundabad food services |
