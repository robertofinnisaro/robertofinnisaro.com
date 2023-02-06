---
title: "ROS Installation"
date: 2023-02-05T00:49:36Z
draft: false
---

This is a guide on how to install ROS-Noetic
It is recommended to use Ubuntu 16.04, 18.04 or 20.04 as the base operating system for ROS to be installed on.
In this guide it will run through how to download and install ROS assuming that Ubuntu 20.04 is used.

# Overview
Depending on the Ubuntu version that is used will depend on the installion of ROS that can be installed on the operating system.
For the likes of Ubuntu 20.04, the ROS version used is ROS-Noetic-Niniemys, this version of ROS will be supported until 2025.
Once booted into your operating system open up a termainal 
> Ctrl + Alt + T

## 1.0 System Update
When the terminal has loaded make sure that the system is up-to-date but running:
> $ sudo apt update && sudo apt upgrade

Once the system has upgraded follow up by removing any unnecessary packages from your system:
> $ sudo apt autoremove

## 1.1 Setting up ROS
Now that your system is set-up, it is time to install the necessary packages for ROS.
To make sure that your system can accept packages from packages.ros.org the system needs to allow software from this location,
to do so run:
> $ sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'

Next, it is time to set up the correct keys for ROS:
> $ curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -

## 1.2 ROS installation
Now that the system is setup and configured for ROS, the installtion process can now be indertaken.
To install ROS the following command is used:
> sudo apt install ros-noetic-desktop-full

This will install everything for ROS including **RQT**, **RVIZ**, **2D/3D simulators**

## 1.3 ROS Environment
To use ROS, this script must be used to tell the terminal where to look for the ROS installation and so that any installed packages can be used.
This script must be run in every new terminal session.
> $ source /opt/ros/noetic/setup.bash

It is possible to source the terminal with the ROS installation on each new terminal session but updating the \\~/.bashrc\\.
This can be done automatically but running the following once:
> $ echo "source /opt/ros/noetic/setup.bash" >> ~/.bashrc

> $ source ~/.bashrc

## 1.4 Building Dependencies for Packages
To make ROS compatable with some terminal applications and programs, some dependancies need to be installed: 
> $ sudo apt install python3-rosdep python3-rosinstall python3-rosinstall-generator python3-wstool build-essential

### 1.4.1 Initialsing rosdep
Before ROS tools can be used, rosdep needs to be initalised which allows you to install system dependancies for source.
To initalise rosdep as follows:
> $ sudo apt install python3-rosdep

> $ sudo rosdep init

> $ rosdep update