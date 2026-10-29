---
title: Media Stack
description: Deploying and organising Jellyfin, the Arr applications, download clients and storage mounts.
published: '2026-06-23'
updated: 2026-10-29
systemType: software
part: 3
chapter: 11
order: 11
estimatedTime: 150 minutes
difficulty: Intermediate
hardware:
- Dell OptiPlex Micro
- NAS Storage
software:
  - Jellyfin
  - Kavita
  - Audiobookshelf
  - Seerr
  - Sonarr
  - Radarr
  - Prowlarr
  - Bazarr
  - qBittorrent
  - SABnzbd
tags:
- Media
- Docker
- Storage
draft: false
---

# Media Stack

## Overview

The media stack on [Barad-dûr](/systems/home-lab/reference/hosts/barad-dur/) serves films, television, books, comics
and audiobooks to the house, and automates finding and organising new media. It is the
largest group of containers in the lab, so it runs on a host of its own.

## Objectives

By the end of this chapter, the reader should be able to:

- Explain how a request moves through the stack from Seerr to the library.
- Understand the role of each service and how they depend on each other.
- Decide which services need direct access to the media storage.
- Find any service's port and image in the reference pages.

## The stack at a glance

| Layer | Services | Role |
|---|---|---|
| Libraries | Jellyfin, Kavita, Audiobookshelf | Serve media to players and readers |
| Requests | Seerr | Lets the household ask for films and series |
| Automation | Sonarr, Radarr, Bazarr | Track wanted media, rename and file it, fetch subtitles |
| Indexers | Prowlarr, Byparr | Search sources on behalf of Sonarr and Radarr |
| Downloads | qBittorrent, SABnzbd | Fetch the files |

## How a request flows

1. A request is made in **Seerr**, which checks Jellyfin to see whether the title is
   already in the library.
2. Seerr passes the request to **Sonarr** for series or **Radarr** for films.
3. Sonarr or Radarr asks **Prowlarr** to search the configured indexers. Prowlarr uses
   **Byparr** to get past indexers that sit behind browser challenges.
4. The chosen release is sent to **qBittorrent** or **SABnzbd**.
5. When the download completes, Sonarr or Radarr renames it and moves it into the
   library folder.
6. **Bazarr** notices the new item and fetches subtitles.
7. **Jellyfin** picks up the new file on its next library scan.

## The libraries

- **Jellyfin** serves films and television to every screen in the house.
- **Kavita** serves books and comics, with a web reader.
- **Audiobookshelf** serves audiobooks and podcasts, and keeps listening progress in sync
  across devices.

## Storage

The libraries, Sonarr, Radarr and the download clients all need to see the same media
folders. Keeping downloads and libraries on the same filesystem lets Sonarr and Radarr
move completed files instantly instead of copying them.

## Ports

Each service publishes its web interface on its own port, for example Jellyfin on 8096
and Seerr on 5055. The full list is in [Docker Services](/systems/home-lab/reference/docker-services/), and the
order in which services depend on each other is in
[Service Dependencies](/systems/home-lab/reference/service-dependencies/).

## Verification checklist

- [ ] A test request in Seerr reaches Sonarr or Radarr.
- [ ] Prowlarr returns results for both Sonarr and Radarr.
- [ ] A completed download is renamed and filed automatically.
- [ ] Jellyfin, Kavita and Audiobookshelf each show their libraries.

## Summary

The media stack separates serving, requesting, automating and downloading into distinct
services that hand work to each other. The next chapter moves from the living room to the
kitchen, and the food services on Gundabad.
