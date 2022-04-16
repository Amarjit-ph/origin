# COMMANDS

BASIC

- docker ps - `All process or Container`
- docker ps --all - `All process or Container`
- docker start ID
- docker system prune - `Clean & Delete All Containers`

STATES

- docker run hello-world - `Docker run`
- docker run -p 4000:8000 amarjitpheiroijam/nodeapp . - `Tunnelling into Container - port machine:container`
- docker stop 52492a977f3c - `Docker stop`
- docker kill 52492a977f3c - `Dcoker kill`

ENTER CONTAINER

- docker exec -it 52492a977f3c bash - `Enter into Container`
- docker run -it mongo bash - `Run & Enter - Override Default Command - Not Recommended`

BUILD IMAGE

- docker build . - `Docker build command`
- docker build -t amarjitpheiroijam/mymongoimage:latest . - `Image with name tag`

DOCKER COMPOSE
docker-compose up --build - `Containerise & run`
docker-compose down
