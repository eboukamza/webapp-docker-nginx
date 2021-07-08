# web

### Technologies

 - Angular
 - Node
 - Nginx

### Prerequisites

 - NodeJS 12+
 - Yarn
 - Docker

### Run as docker container

you can run this project as docker container

    # build docker image if first time of if you have made changes
    docker build --no-cache -f Dockerfile -t fluctuat-web .

    # run fluctuat-web container
    docker run --rm --network="host" fluctuat-web

## Installation

Launch

    yarn

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Run as docker container

you can run this project as docker container

    # build docker image if first time of if you have made changes
    docker build --no-cache -f Dockerfile -t web .

    # run fluctuat-web container
    docker run --rm --network="host" web

   server is exposed in http://localhost:8080
