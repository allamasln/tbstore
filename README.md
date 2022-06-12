# TBStore

Building for a coding challenge an online store using MERN Stack.

## Getting Started

These instructions will cover usage information and for the docker containers

### Prerequisities

In order to run this containers you'll need docker installed.

- [Windows](https://docs.docker.com/windows/started)
- [OS X](https://docs.docker.com/mac/started/)
- [Linux](https://docs.docker.com/linux/started/)

### Usage

#### Development environment

##### Build

```shell
git clone https://github.com/allamasln/tbstore.git
cd tbstore
make build-dev
```

##### Start

```shell
make run-dev
```

##### Stop

```shell
docker-compose down
```

#### Environment Variables

- `MONGO_URI` - database connection (backend)
- `REACT_APP_API_URL` - api url (frontend)

#### Images storage

- [allamasln/tbs-api](https://hub.docker.com/repository/docker/allamasln/tbs-api) - api-server
- [allamasln/tbs-client-prod](https://hub.docker.com/repository/docker/allamasln/tbs-client-prod) - optimized client for production
