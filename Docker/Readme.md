# Docker

Docker is a set of the platform as a service products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine. It was first started in 2013 and is developed by Docker, Inc

# Custom Docker Image

Overview of Creating a custom image

1. Dockefile is sent to docker client
2. Docker Client
3. Custom Image

Container can talk to outside world but you cannot go inside a container

# Containerising a application

1. Bring base image
2. Create a working dir
3. Bring all files
4. Run installer
5. Default command

# Multi docker container

Docker Compose is used to run multiple containers as a single service. For example, suppose you had an application which required NGNIX and MySQL, you could create one file which would start both the containers as a service without the need to start each one separately.

`Two seperate containers wrap into one container`

Containers in same container can talk internally without any connection

# References

- Docker official - https://www.docker.com/
- Tutorial Point - https://www.tutorialspoint.com/docker/index.htm
- The Ultimate Docker Cheat Sheet- https://dockerlabs.collabnix.com/docker/cheatsheet/
