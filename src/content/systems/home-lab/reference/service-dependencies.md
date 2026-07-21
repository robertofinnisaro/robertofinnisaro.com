---
title: "Service Dependencies"
description: "Dependencies between network, storage, authentication, proxy, monitoring and application services."
published: 2026-07-20

systemType: infrastructure
contentType: reference
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

| Service             | Host      | Depends On             |
| ---------------------| -----------| ------------------------|
| Home Assistant      | Erebor    | Argonath, Minas Tirith |
| Jellyfin            | Barad-dur | Moria                  |
| Sonarr              | Barad-dur | Moria                  |
| Radarr              | Barad-dur | Moria                  |
| Pi-hole             | Gimli     | Minas Tirith           |
| Tailscale           | Gloin     | Internet               |
| Nginx Proxy Manager | Gloin     | Minas Tirith           |
