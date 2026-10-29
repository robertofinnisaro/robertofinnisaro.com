---
title: Introduction
description: Why the lab exists, what it will provide and how the book is organised.
published: '2026-07-16'
updated: 2026-10-29
systemType: infrastructure
part: 1
chapter: 1
order: 1
estimatedTime: 25 minutes
difficulty: Beginner
hardware: []
software: []
tags:
- Self Hosting
- Infrastructure
- Home Lab
draft: false
---

# Introduction

## Overview

Project Erebor is a home lab: a small collection of computers, network equipment and
services that runs the digital side of a house. It hosts the home automation, the media
library, the recipes and pantry, DNS for every device on the network, and the tools that
watch over all of it.

This chapter explains what a home lab is, why this one exists, what it is trying to
achieve and what limits it has to work within. It then describes the platform the rest of
the book builds, and how the book is organised.

## Objectives

By the end of this chapter, the reader should be able to:

- Explain what a home lab is and how it differs from a single home server.
- Weigh the benefits of self-hosting against its costs.
- Describe the goals and constraints that shape Project Erebor.
- Recognise the main systems in the target platform and what each is for.
- Find their way around the build guide and the reference section.

## What is a home lab?

A home lab is infrastructure run at home for the purpose of running it. It might begin as
one spare computer sharing files, but it becomes a lab once it is treated as a system:
something designed, changed deliberately, monitored and documented, rather than a box in a
cupboard that nobody dares to restart.

There are two common reasons to build one. The first is **learning**. Virtualisation,
networking, storage and automation are easiest to understand by doing them, and a home lab
is a place where a mistake costs an evening rather than an outage at work. The second is
**service**. A lab can run things the household actually uses every day: home automation,
media, DNS filtering, backups.

Project Erebor is deliberately both. That combination creates the central tension of the
book. A learning environment wants to change often; a household service wants to stay
exactly as it is. Much of the design that follows exists to let the first happen without
breaking the second.

## Why self-host?

Almost everything in this lab could be replaced with a subscription. Self-hosting is a
choice, and it has costs as well as benefits.

The benefits:

- **Control.** Data such as camera feeds, sensor history, recipes and media libraries stays
  inside the house. Services work the way they are configured, not the way a provider
  decides to change them.
- **Local operation.** Home Assistant, DNS and the media server keep working when the
  internet connection does not. A light switch should not depend on a data centre.
- **Integration.** Self-hosted services can be wired together in ways commercial products
  rarely allow. The food system in [Chapter 12](/systems/home-lab/build-guide/12-food-services/)
  exists because no single product joined a meal plan to a pantry.
- **Understanding.** Running a service end to end teaches how it actually works: its
  dependencies, its failure modes and what it costs to keep healthy.

The costs:

- **Responsibility.** There is no support desk. Updates, security, backups and recovery
  are the operator's job.
- **Time.** A service that takes an afternoon to deploy can take years to look after.
- **Single points of failure.** A household that relies on the lab will notice when it is
  down. Every service brought in raises the bar for how reliable the lab needs to be.
- **Power and hardware.** Equipment running continuously costs electricity, and it
  eventually wears out.

The rule applied throughout this book is simple: a service is self-hosted when the benefit
is real and the cost of looking after it is understood. Being able to host something is not
a reason on its own.

## Project goals

Project Erebor has six goals. They are also listed on the
[project overview](/systems/home-lab/), and they are the measure against which every later
decision is judged.

1. **A stable compute platform.** Virtual machines run on Proxmox VE, so services can be
   isolated, snapshotted, backed up and moved without reinstalling them.
2. **Migrate, don't rebuild.** Existing Docker workloads move onto the new platform without
   unnecessary redesign. A migration is not an excuse to change everything at once.
3. **Structured networking.** The network grows from a single flat home network into one
   with clear segments, stable addressing and deliberate rules between them.
4. **Separate responsibilities.** Compute, storage and routing live on different machines,
   so that maintenance on one does not take the others down with it.
5. **Document everything significant.** Every build step and design decision is written
   down, and the reference section records the lab as it actually is.
6. **A practical recovery path.** For every critical service, there is a known way to bring
   it back after a failure, and that way has been tested.

There are also things the project deliberately does not aim for. It is not a high
availability cluster, it does not try to match enterprise uptime, and it does not chase the
newest hardware. A small lab that is understood is better than a large one that is not.

## Constraints

The design is shaped as much by its limits as by its goals.

- **Space.** The lab lives in a home, not a server room. Equipment must be compact and
  quiet enough to sit near people. This is why the rack is a 10-inch design rather than a
  full-size 19-inch one (see [Chapter 2](/systems/home-lab/build-guide/02-planning-the-lab/)).
- **Power and noise.** Everything runs around the clock, so idle power draw and fan noise
  matter more than peak performance. Small form factor PCs and Raspberry Pis are favoured
  over rack servers for that reason.
- **Budget.** Hardware is chosen for value, and second-hand business desktops are
  preferred where they fit. The cost of a mistake is lower, and the hardware is well
  documented.
- **Time.** The lab is built and maintained in spare time, so the design favours
  approaches that are easy to understand and to put right later over ones that are clever.
- **The household.** Other people depend on the services. Changes have to be planned
  around them, and the lab must recover from power cuts on its own without someone at a
  keyboard.

## The target platform

The finished lab is organised around a small number of named systems. Names come from
Middle-earth, and the scheme is explained in
[Naming Conventions](/systems/home-lab/reference/naming-conventions/).

```text
Minas Tirith     Firewall and router            Planned
Argonath         Core managed switch            Active
Erebor           Proxmox VE compute node        Active
  Rivendell      Docker VM: DNS, dashboard, monitoring
  Gundabad       Docker VM: food services
Barad-dûr        Media server                   Active
Moria            Network storage                Planned
Gimli, Gloin,    Raspberry Pis for network,
Balin, Bombur    automation and camera roles    Active
Eriador          UniFi wireless network         Active
```

**Erebor** is the heart of it: a Dell OptiPlex 3060 Micro running Proxmox VE, hosting the
virtual machines for Home Assistant, the main Docker services, a Minecraft server and the
food system. **Barad-dûr**, a separate OptiPlex, runs the media stack on its own so that the
busiest and most frequently updated services cannot crowd out everything else.

Around them, **Raspberry Pis** handle small, independent jobs that should keep working
while the larger machines are restarted: the reverse proxy and wireless controller on
Gimli, secondary DNS and remote access on Gloin, the MQTT broker for home automation on
Balin, and a printer camera on Bombur. **Argonath** connects them all.

Two pieces remain planned. **Minas Tirith** will take routing and firewalling over from the
existing router, and **Moria** will provide central storage for media and backups. The
current state of every system, whether active or planned, is recorded in the
[Hardware Inventory](/systems/home-lab/reference/hardware-inventory/).

## How this book is organised

The book has two halves that serve different purposes.

The **build guide** tells the story in order. Each chapter covers one stage of the build:
why it is needed, the decisions involved and how to carry it out and check it worked. It is
divided into four parts:

- **Part 1, Foundations** (Chapters 1–3): the goals, the plan and the preparation of the
  first machine.
- **Part 2, The Platform** (Chapters 4–8): installing and configuring Proxmox VE, storage,
  networking and the first virtual machines.
- **Part 3, Services** (Chapters 9–16): Home Assistant, the Docker platform, media, food,
  monitoring, backups, security and automation.
- **Part 4, Operations** (Chapters 17–20): disaster recovery, expansion, maintenance and
  plans for the future.

The **reference** section records the lab as it is today: hosts, virtual machines,
containers, dependencies, addressing and procedures. The build guide explains *why*; the
reference says *what*, and it is the part that changes as the lab changes. When the two
disagree, the reference is correct and the chapter is due an update.

Chapters are written so that they can be followed in sequence, but most of the Services
chapters stand alone once the platform is in place.

## Verification checklist

- [ ] The difference between a learning lab and a household service is understood.
- [ ] The six project goals, and what the project does not aim for, are clear.
- [ ] The main constraints (space, power, budget, time and the household) are understood.
- [ ] Each named system in the target platform can be matched to its role.
- [ ] The split between the build guide and the reference section is clear.

## Summary

Project Erebor is a home lab built both to learn from and to serve a household. Its goals
are a stable virtualised platform, careful migration, structured networking, separated
responsibilities, thorough documentation and a tested way back from failure. Its
constraints are those of a home: space, power, noise, budget and the people who rely on it.

The next chapter turns those goals into a plan: requirements, design principles, hardware,
the physical rack, the logical architecture and the order in which it will be built.
