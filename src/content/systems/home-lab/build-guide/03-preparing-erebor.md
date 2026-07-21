---
title: Preparing Erebor
description: Preparing a Dell OptiPlex Micro for its role as the first Proxmox node.
published: '2026-07-20'
systemType: compute
type: chapter
part: 1
chapter: 3
order: 3
estimatedTime: 45 minutes
difficulty: Beginner
hardware:
- Dell OptiPlex 3060 Micro
- USB Flash Drive (8GB+)
software:
- Proxmox VE 9 ISO
- Rufus
tags:
- Proxmox
- Dell
- Virtualisation
draft: false
---

# Preparing Erebor

## Overview

Erebor is the first compute node in Project Erebor and will host the initial Proxmox VE installation.

Before installing the hypervisor, the system must be inspected, cleaned, tested and configured. This reduces the likelihood of discovering hardware faults after virtual machines and services have already been deployed.

Preparing the host includes:

- identifying the exact hardware configuration
- inspecting the chassis and internal components
- cleaning the cooling system
- replacing ageing consumable components where necessary
- updating the BIOS
- enabling virtualisation features
- configuring power and recovery behaviour
- testing memory and storage
- recording the final hardware state
- preparing the Proxmox installer.

> **Operational references**
>
> The current hardware specification is maintained in the
> [Hardware Inventory](/system/home-lab/reference/hardware-inventory).
>
> The final firmware and BIOS settings are recorded in the
> [Erebor Host Configuration](/system/home-lab/reference/erebor-host-configurationuration).
>
> Hardware test results are recorded in the
> [Hardware Validation Log](/system/home-lab/reference/hardware-validation-log).

## Objectives

By the end of this chapter, you should be able to:

- identify the installed hardware in Erebor
- inspect the host for visible defects
- clean and service the cooling system
- update the system firmware safely
- configure the BIOS for virtualisation
- enable recovery after power loss
- test the system memory
- assess the health of the installed storage device
- record all relevant hardware and firmware information
- prepare verified Proxmox installation media.

## Why preparation matters

A hypervisor host differs from a normal desktop computer.

A desktop may be restarted occasionally and can tolerate minor inconvenience. A hypervisor may run continuously and provide several important services at once.

A fault in the physical host can affect:

- Home Assistant
- Docker services
- media applications
- monitoring
- storage access
- DNS
- future infrastructure workloads.

Problems such as unstable memory, overheating, failing storage or incorrect firmware settings can appear as software faults even when the actual cause is hardware.

A controlled preparation process establishes a known baseline before software is installed.

```text
Identify hardware
      |
Inspect chassis
      |
Clean and service
      |
Update firmware
      |
Configure BIOS
      |
Test memory
      |
Test storage
      |
Record results
      |
Prepare installer
      |
Final readiness check
```

## Safety and handling

Before opening the system:
1. shut the computer down
2. disconnect the power adapter
3. disconnect all peripherals
4. press the power button briefly to dischange residual power
5. work on a clean, stable surface
6. avoid placing components on conductive material
7. use appropriate electrostatic-discharge precautions. 

Avoid wokring on carpet where practical.
Do no remove or install internal components while power is connected.

## Requirement tools and meterials
### Esential equipment
| Item            | Purpose                                        |
| -----------------| ------------------------------------------------|
| Keyboard        | BIOS navigation and diagnostics                |
| Monitor         | Firmware configuration and installation        |
| Ethernet cable  | Network testing and later Proxmox installation |
| USB flash drive | Installation media                             |
| Screwdriver set | Opening and servicing the chassis              |
| Air duster      | Removing dust from heatsinks and vents         |
| Soft brush      | Loosening accumulated dust                     |
| Torch           | Inspecting connectors and the motherboard      |

### Optional service items
| Item                        | Purpose                                  |
| -----------------------------| ------------------------------------------|
| Replacement thermal paste   | Renewing the CPU thermal interface       |
| CR2032 battery              | Replacing an ageing CMOS battery         |
| Isopropyl alcohol           | Cleaning thermal paste residue           |
| Anti-static mat             | Controlled work surface                  |
| Digital callipers           | Measuring hardware or future rack mounts |
| USB-to-SATA or NVMe adapter | External storage testing                 |
| Watt meter                  | Measuring idle and load power            |

## Identifying Erebor
Before changing anything, record the system identity.

The initial record should include:
- manufacturer
- model
- service tag
- express service code
- processor
- installed memory
- memory module arrangement
- storage device
- network adapter
- BIOD version
- power-adapter rating

Example:
| Property      | Value                       |
| ---------------| -----------------------------|
| Host name     | Erebor                      |
| Manufacturer  | Dell                        |
| Model         | OptiPlex 3060 Micro         |
| Service tag   | Record privately            |
| Processor     | To be confirmed             |
| Memory        | To be confirmed             |
| Storage       | To be confirmed             |
| Network       | Integrated Gigabit Ethernet |
| BIOS version  | To be confirmed             |
| Power adapter | To be confirmed             |

Record the final values in the [Hardware Inventory](/system/home-lab/reference/hardware-inventory/)

## External inspection
Inspect the system before opening it.
Check:
- front USB ports
- power button
- audio ports
- rear USB ports
- DisplayPort or HDMI connectors
- Ethernet port
- power connector
- antenna connections where fitted
- ventilation openings
- chassis screws
- rubber feet
- case deformation

Look for evidence of:
- impact damage
- corrosion
- liquid exposure
- missing screws
- damaged connectors
- cracked plastic
- blocked vents
- unusual odours

Photographthe system for disassembly. These images provide a useful record of the original condition.

## Opening the chasis
Follow the manufacturer's chassis-removal procedure.
Do not force the cover. If it does not move freely, confirm that all retaining screws and latches have been released.
Once opened, record the internal arrangement before removing conponents.

Useful photographs include:

- full internal overview
- memory modules
- storage device
- wireless adapter
- cooling assembly
- power and fan connectors
- motherboard labels
- service-tag labels

## Internal inspection
Inspect the internal components for:
- dust accumulation
- fan obstruction
- swolen or leaking capacitors
- corrosion
- damaged connectors
- loose cables
- missing screws
- cracked fan blades
- heat discoloration
- damaged thermal pads
- unseated memory

Pay particular attention to the cooling fan. Dust may accumulate between the fan and heatsink even when the outer vents appear clear.

## Cleaning Erebor
### Cleaning procedure
1. hold the fan blades stationary
2. use short bursts of air through the heatsink
3. remove dust from both intake and exhaust directions
4. loosen compacted dust using a soft brush
5. clean the chassis vents
6. inspect the fan blades
7. inspect the motherboard for remaining debris
8. remove loose dust from the chassis

Do no allow the fan to spin at excessive speed while using compressed air.
Avoid directing compressed air so closely that condensation or propellant reaches the components.

### Fan inspecion
Check that the fan:
- rotates freely
- does not scrape
- has no damaged blades
- is firmly mounted
- has an undamaged cable
- uses a secure motherboard connector

A fan that rattles, stalls or spons unevenly should be replaced before deployment.

### Thermal paste
The existing thermal paste may be retained if temperatures are normal and the cooling assembly has not been disturbed.
Replacement is reasonable when:
- the system is serveral years old
- the heatsink has been removed
- temperatures are unexpectedly high
- the previous service history is unknown

### Replacement procedure
1. remove the heatsink using the numbers screw sequence where present
2. lift it evenly
3. remove old paste from the processor and heatsink
4. use lint-free material and suitable isopropyl alcohol
5. allow both surfaces to dry
6. apply an appropriate quantity of new paste
7. reinstall the hearsink evenly
8. tighten screws gradually using a cross pattern
9. reconnect the fan if it was disconnected

Do not apply excessive paste.

The objective is to fill microscopic surface imperfections, not create a thick insulating layer.

## CMOS battery
A weak CMOS battery can cause
- loss of BIOS settings
- incorrect time after power loss
- boot warnings
- unexpected firmware resets

The battery may be replaced proactively if:
- the system is old
- the service history is unkown
- BIOS settings have previously reset
- the date and time are not retained

Record the replacment date in the [Maintenance Log](/system/home-lab/reference/maintenance-log)

## Memory inspection
Identify:
- number of installed modules
- capacity per module
- manufacturer
- speed
- matching or mixed modules
- available memory slots

Check that each module is fully seated.
If modules are removed:
1. release the retaining clips
2. handle the module by its edges
3. inspect the contacts
4. reinstall it firmly
5. confirm both retaining clips lock

Record the final arrangement in the [Hardware Validation Log](/system/home-lab/reference/hardware-validation-log)

## Storage inspection
Idenify the installed storage device.
Record
- manufacturer
- model
- capacity
- interface
- serial number , where appropriate
- firmware revision
- approximate age
- physical condition

Do no publish storage serial numebrs if the documentation is public.
Inspect the mounting screw, thermal pad and connector.
A loose M.2 device can cause intermittent errors or disappear from firmware detection.

## Network interface inspection
Erebor's network interface will carry management and virtual-machine traffic.
Inspect the Ethernet port for:
- damaged pins
- loose housing
- debris
- broken cable-retention tabs
- intermittent link behaviour

Test with a known-good cable and switch port.
The final interface name and addressing configuration will be documented during the Proxmox installation and network chapters.

## Power adapter inspection
Confirm that the power adapter:
- is an appropriate Dell unit
- provides the required voltage
- has sufficient wattage
- has an undamaged cable
- fits the power connector securely
- does not become excessively hot
- is not visibly swollen or cracked

Record its rated output.
Where multiple identical adapters exist, label the ones assigned to Erebor

## First power-on inspection
Before chaning the firmware:
1. reconnect the monitor and keyboard
2. connect the power adapter
3. start the system
4. listen for abnormal fan or drive noise
5. check for diagnositc light or beep codes
6. confirm that the firmware detects memory and storage
7. check the date and time
8. note the installed BIOS version

Do not proceed with firmware updates if the system appears unstable

## Dell diagnosics

Run the built-in Dell pre-boot diagnostics where available.

The diagnostics may test:

- processor
- memory
- storage
- fan
- motherboard
- display
- network hardware

Record:

- test date
- test type
- result
- error codes
-corrective action

Store the results in the [Hardware Validation Log](/system/home-lab/reference/hardware-validation-log)

## Updating the BIOS

Firmware should be updated before the host enters service.

Benefits may include:

- security fixes
- stability improvements
- processor microcode updates
- device compatibility
- power-management fixes
- corrected virtualisation behaviour

### Before updating

Confirm:

- the exact system model
- the current BIOS version
- the target BIOS version
- that the update is intended for this device
- that the power adapter is connected securely
- that the system is stable
- that firmware passwords are known
- that BitLocker or other disk encryption is not relevant to the current installation
### Update method

Use a supported Dell update method.

Possible methods include:

- BIOS update from the firmware interface
- Dell executable from a temporary operating system
- firmware update from a FAT32 USB device
- Dell recovery or update environment

Do not interrupt the update.

The system may restart more than once.

### After updating

After the update:

1. enter the BIOS
2. confirm the new version
3. load defaults if recommended
4. reapply the required settings
5. verify that memory and storage are detected
6. confirm the date and time
7. run a basic boot test

Record the result in the [Erebor Host Configuration](/system/home-lab/reference/erebor-host-configuration).

### BIOS configuration

The exact menu names may vary by BIOS revision.

The required configuration should be based on behaviour rather than blindly copying labels.

### Virtualisation support

Enable:

- Intel Virtualization Technology
- Intel VT-d or I/O virtualisation
- hardware-assisted execution
- relevant PCIe virtualisation options where available

These features allow Proxmox to provide hardware-assisted virtual machines and device passthrough.

### Intel Virtualization Technology

This enables CPU virtualisation extensions used by KVM.

Without it, virtual machines may fail to start or may use severely limited virtualisation modes.

### Intel VT-d

VT-d provides I/O memory-management support.

It may be required for:

- PCI device passthrough
- USB-controller passthrough
- advanced isolation
- future hardware acceleration

Even if passthrough is not required immediately, enabling VT-d during initial preparation avoids another firmware change later.

### Boot mode

Use UEFI boot mode unless a specific compatibility requirement prevents it.

Recommended:
```
Boot mode: UEFI
Legacy boot: Disabled
```
UEFI provides a modern boot process and should be used consistently for Proxmox installation.

Changing boot mode after installation may prevent the system from booting.

### Secure Boot

Secure Boot support depends on the target Proxmox version and installation plan.

For the initial build, record the selected state explicitly.

Do not leave the setting undocumented.

Example:
```
Secure Boot: Disabled during initial installation
```
It may be revisited after the host is stable.

### SATA and storage mode

Record the current storage-controller mode.

Possible options may include:

- AHCI
- RAID On
- legacy modes

For a straightforward Proxmox installation, AHCI is commonly appropriate when no hardware RAID functionality is required.

Changing storage mode after an operating system has been installed can prevent it from booting.

Select and document the final mode before installation.

### Power recovery

Configure the host to recover automatically after an unexpected power interruption.

Recommended setting:
```
AC Recovery: Power On
```
Alternative firmware wording may include:

- restore on AC power loss
- after power failure
- AC behaviour
- last power state

For infrastructure hosts, automatic power-on is usually preferable.

Without it, the lab may remain offline after power is restored.

### Automatic power-on

Some Dell systems support scheduled power-on.

This is not required if the host operates continuously, but it may provide a recovery option.

Document whether it is enabled or disabled.

### Wake-on-LAN

Enable Wake-on-LAN if remote power-on is planned.

Relevant options may include:

- Wake on LAN
- Wake on LAN/WLAN
- LAN only
- wake from S4/S5
- deep sleep control

Wake-on-LAN should be tested after the operating system is installed because firmware and network-driver settings may both affect it.

### Deep sleep

Deep-sleep modes may reduce standby power but can interfere with:

- Wake-on-LAN
- USB wake
- scheduled power-on
- remote recovery

For a remotely managed infrastructure host, reliability may be more important than minimal standby consumption.

### USB configuration

Confirm that USB ports remain enabled.

This is important for:

- installation media
- keyboard access
- recovery devices
- Home Assistant USB passthrough
- Zigbee or Z-Wave coordinators
- UPS communication

If USB boot is disabled after installation, document that decision.

### Integrated devices

Disable hardware only when there is a clear reason.

Potential candidates include:

- audio controller
- wireless adapter
- Bluetooth
- unused serial interfaces

Disabling unused devices may reduce complexity, but it can also remove future options.

For the first installation, retaining default support is reasonable unless the device causes a known problem.

### Date and time

Set the firmware clock correctly.

The host operating system will later synchronise using NTP, but a significantly incorrect firmware clock can cause:

- certificate errors
- confusing logs
- repository failures
- incorrect task scheduling

### BIOS passwords

A firmware administration password may prevent unauthorised changes.

Before enabling one, consider:

- whether the device is physically secure
- where the password will be stored
- how recovery will be handled
- whether remote hands may need access
- whether the documentation is public

Never place firmware passwords directly in public Markdown files.

### Recommended BIOS baseline
| Setting                         | Recommended state                     |
| ---------------------------------| ---------------------------------------|
| Boot mode                       | UEFI                                  |
| Legacy boot                     | Disabled                              |
| Intel Virtualization Technology | Enabled                               |
| Intel VT-d                      | Enabled                               |
| Secure Boot                     | Documented final state                |
| Storage mode                    | AHCI, unless another mode is required |
| AC recovery                     | Power On                              |
| Wake-on-LAN                     | Enabled if required                   |
| Deep sleep                      | Disabled where it blocks remote wake  |
| USB ports                       | Enabled                               |
| Network interface               | Enabled                               |
| Date and time                   | Correct                               |
| Firmware password               | Optional and securely recorded        |


The authoritative deployed values belong in the [Erebor Host Configuration.](/system/home-lab/refernce/erebor-host-configuration)

### Memory testing

Memory faults can cause:

- host crashes
- corrupted virtual machines
- filesystem errors
- application failures
- unexplained kernel faults

Run a dedicated memory test before installing Proxmox.

### Test duration

At minimum:

- complete one full pass
- preferably run multiple passes
- consider an overnight test for used or unverified memory

A single successful pass does not prove that memory can never fail, but it provides a useful baseline.

### Failure handling

If errors occur:

1. stop deployment
2. record the failing address or module indication
3. power down
4. reseat the modules
5. retest
6. test modules individually
7. test each memory slot
8. replace the failing component

Do not deploy a hypervisor on a system with known memory errors.

### Storage health testing

The storage device will contain the Proxmox host and potentially local virtual-machine storage.

Inspect available SMART or NVMe health information.

Record:

- overall health
- temperature
- power-on hours
- media errors
- unsafe shutdown count
- available spare
- percentage used
- reallocated sectors, where applicable
- pending sectors, where applicable

### Warning indicators

Potential concerns include:

- critical health warnings
- media or data-integrity errors
- rapidly increasing error counts
- reallocated sectors
- pending sectors
- very high wear
- abnormal temperatures
- repeated unsafe shutdowns

A used storage device should not be trusted solely because it boots successfully.

### Optional stress testing

A controlled stress test can identify cooling or power problems.

Possible test categories include:

- processor load
- memory load
- storage load
- combined system load

Monitor:

- CPU temperature
- fan speed
- clock behaviour
- thermal throttling
- system stability
- power-adapter temperature
- unexpected shutdowns

Do not conduct prolonged stress testing until cooling has been inspected.

Temperature baseline

Record initial temperatures where possible.

| Condition        | CPU temperature | Storage temperature | Notes |
| ------------------| ----------------:| --------------------:| -------|
| Firmware idle    | To be measured  | To be measured      |       |
| Diagnostic test  | To be measured  | To be measured      |       |
| Sustained load   | To be measured  | To be measured      |       |
| Normal room idle | To be measured  | To be measured      |       |


These values provide a baseline for future troubleshooting.

## Network test

Before installation:

1. connect Erebor to the current network
2. confirm a physical link
3. verify link speed where possible
4. test the cable with another device if necessary
5. confirm that the switch port is stable

At this stage, the permanent VLAN configuration does not need to be implemented.

The purpose is to verify the physical network interface.

## Preparing the Proxmox installer
Download the installation image

Obtain the intended Proxmox VE ISO.

Record:

- product version
- release date
- download date
- filename
- checksum

### Verify the checksum

Verify the downloaded file before writing it to USB.

Checksum verification helps detect:

- incomplete downloads
- corruption
- incorrect files
- accidental replacement

Do not skip verification merely because the file appears to open correctly.

### Select the USB device

Use a reliable USB flash drive of at least 8GB.

The process will erase the device.

Confirm the correct drive before writing the image.

### Write the image

Use a suitable tool such as Rufus or another trusted image writer.

Follow the tool's recommended mode for the Proxmox ISO.

After writing:

- eject the device cleanly
- reconnect it
- confirm that the system recognises it
- label it clearly

Suggested label:
```
PROXMOX-VE-9-INSTALL
```

### Testing USB boot

Before beginning the actual installation:

1. insert the USB drive
2. start Erebor
3. open the one-time boot menu
4. select the UEFI USB entry
5. confirm that the Proxmox installer starts
6. stop before modifying storage

This test confirms:

- the ISO was written successfully
- UEFI boot works
- the USB device is readable
- the firmware can launch the installer

### Preparing the physical deployment location

Before installing Proxmox, decide whether Erebor will be:

- installed on a workbench and moved later
- mounted in the Lab Rax first
- temporarily operated outside the rack

Installing outside the rack may provide easier access during setup.

However, the final rack mount should be test-fitted before the node enters long-term service.

Confirm:

- the chassis fits the printed mount
- ventilation remains clear
- the power button is accessible
- the power connector is accessible
- the Ethernet cable can be removed
- the device can be serviced without dismantling the rack

The deployed rack position is maintained in the [Rack Layout](/systems/home-lab/reference/rack-layout).

## Host labelling

Apply a physical label to Erebor.

The label should include:

- host name
- role
- asset identifier
- optional management reference
- optional QR code pointing to internal documentation

Avoid placing sensitive information such as passwords on the chassis.

Example:
```
EREBOR
Primary Proxmox Compute Node
Asset: CMP-001
```

## Documentation updates

Before completing this chapter, update:

Hardware Inventory
Erebor Host Configuration
Hardware Validation Log
Rack Layout
Maintenance Log.

## Final readiness checklist
### Hardware

- [ ] Chassis inspected.
- [ ] Internal components inspected.
- [ ] Cooling system cleaned.
- [ ] Fan rotates freely.
- [ ] Thermal paste assessed or replaced.
- [ ] CMOS battery assessed or replaced.
- [ ] Memory modules identified.
- [ ] Storage device identified.
- [ ] Network port tested.
- [ ] Power adapter inspected.
- [ ] Host physically labelled.
### Firmware
- [ ] BIOS updated.
- [ ] BIOS version recorded.
- [ ] UEFI mode enabled.
- [ ] Legacy boot disabled.
- [ ] Intel virtualisation enabled.
- [ ] Intel VT-d enabled.
- [ ] Storage mode confirmed.
- [ ] AC recovery configured.
- [ ] Wake-on-LAN decision recorded.
- [ ] USB configuration confirmed.
- [ ] Date and time correct.
### Validation
- [ ] Dell diagnostics passed.
- [ ] Memory test passed.
- [ ] Storage-health check completed.
- [ ] Network link tested.
- [ ] Temperature baseline recorded.
- [ ] No unresolved hardware warnings remain.
### Installation media
- [ ] Proxmox ISO downloaded.
- [ ] Checksum verified.
- [ ] USB installer written.
- [ ] USB installer labelled.
- [ ] UEFI USB boot tested.

## Summary

Erebor has now been inspected, serviced, configured and validated.

The host should have:

- a documented hardware configuration
- current firmware
- virtualisation support enabled
- known memory and storage health
- working network connectivity
- verified installation media
- a physical mount and deployment plan

The next chapter installs Proxmox VE and establishes Erebor as the first active compute node in Project Erebor.

## Related references
[Hardware Inventory](/systems/home-lab/reference/hardware-inventory)
[Erebor Host Configuration](/systems/home-lab/reference/erebor-host-configuration)
[Hardware Validation Log](/systems/home-lab/reference/hardware-validation-log)
[Maintenance Log](/systems/home-lab/reference/maintenance-log)
[Rack Layout](/systems/home-lab/reference/rack-layout)
[Naming Conventions](/systems/home-lab/reference/naming-conventions)