---
title: Preface
description: The purpose, scope and conventions used throughout Project Erebor.
published: '2026-07-16'
updated: 2026-10-29
systemType: infrastructure
part: 0
order: 0
estimatedTime: 15 minutes
difficulty: Beginner
hardware: []
software: []
tags:
- Self Hosting
- Home Lab
- Documentation
draft: false
---

# Preface

## Why this book exists

Most home labs are documented, if at all, in the head of the person who built them. That
works until something breaks months after the last change, when nobody can remember why a
service lives where it does, which machine it depends on or how it was set up in the first
place.

This book is the documentation for Project Erebor, written as it was built. It records
what was built and also why: the requirements behind each decision, the alternatives that
were rejected and the mistakes that changed the plan. Some chapters are step-by-step
builds. Others, such as the food system in
[Chapter 12](/systems/home-lab/build-guide/12-food-services/), tell the story of a project
that took several attempts to get right, because the attempts are where most of the
lessons came from.

Writing it down has a practical purpose as well. A lab that a household relies on needs a
recovery path that does not depend on memory. If Erebor fails, this book and its reference
section should be enough to rebuild it.

## Audience

The book is written for technically curious readers who enjoy self-hosting, smart homes and
hands-on problem solving. It assumes some familiarity with:

- using a Linux command line;
- basic networking: IP addresses, DNS and what a router does;
- the idea of virtual machines and containers, even without having run them.

It does not assume prior experience with Proxmox VE, VLANs, Docker Compose or Home
Assistant. Each is introduced when it is first needed.

Readers building their own lab will not have the same hardware, and should not try to copy
the design exactly. The reasoning is meant to transfer even where the specific devices do
not.

## Scope

The book covers one lab, from an empty rack to a working set of household services:

- planning the lab and building a 3D-printed rack to hold it;
- preparing the hardware and installing Proxmox VE;
- storage, networking and the first virtual machines;
- the services the house depends on: Home Assistant, the Docker platform, media, food,
  monitoring, backups, security and automation;
- operating the lab over time: recovery, expansion, maintenance and future plans.

It does not attempt to be a complete manual for any of the software it uses. Where official
documentation exists, the book explains how a tool was used here and leaves the full detail
to that documentation. It also does not cover enterprise topics such as clustering, high
availability or compliance, except to explain why they were left out.

The lab is unfinished, and so is the book. Chapters for parts of the lab that are still
planned describe the intended design and say so. Each chapter is dated, and later changes
are recorded in its `updated` date.

## Conventions

The same conventions are used throughout.

**Names.** Hosts and networks are named after places and characters from Middle-earth:
places for infrastructure, dwarves for Raspberry Pis and dragons for 3D printers. Virtual
machines, containers and services keep descriptive names. The full scheme is in
[Naming Conventions](/systems/home-lab/reference/naming-conventions/).

**Status.** Every host and service has one of a small set of states:

| Status | Meaning |
|---|---|
| Active | Deployed and in use |
| Planned | Designed but not yet deployed |
| Future | A possible later addition with no design yet |
| To be confirmed | Not yet verified on the live system |

**Code and configuration.** Commands, file names, container names and settings appear in
`monospace`. Longer examples appear in code blocks. Examples are simplified to show the
idea and are not always complete, deployable configuration.

**What is not published.** IP addresses, MAC addresses, serial numbers, passwords, API keys
and tokens are deliberately left out, as are household data such as recipes and stock.
Where a value matters but is private, the text says it is recorded privately.

**Chapter layout.** Build chapters open with an overview and a list of objectives, and close
with a verification checklist and a summary. Each chapter page also shows an estimated
time, a difficulty level and the hardware and software involved.

**Spelling and dates.** The book uses British English. Dates in tables and logs use the
ISO format, for example `2026-10-29`.

## How to use the reference section

The book has two halves. The **build guide** is written to be read in order and explains
why the lab is the way it is. The **reference section** records what the lab is right now.

The reference section is organised into:

- **host pages**, one for each machine, recording its hardware, services and change log;
- **inventories** of hardware, virtual machines and Docker containers;
- **architecture records**, such as service dependencies, naming conventions, addressing and
  the rack layout;
- **operational records**, such as the validation and maintenance logs, update procedures
  and troubleshooting notes.

Reference pages change whenever the lab changes, and every page keeps a change log. When a
chapter and a reference page disagree, the reference page is the current truth and the
chapter is due an update.

In practice, read the build guide once to understand the lab, and use the reference
section to answer specific questions: which host runs a service, what depends on it, and
what happens when it is restarted.

## Summary

This book documents Project Erebor in two halves: a build guide explaining how and why the
lab was built, and a reference section recording its current state. It is written for
technically curious readers, covers one real lab rather than every possible design, and
leaves out anything private. The next chapter introduces the project itself: what a home
lab is, why this one exists and what it is trying to achieve.
