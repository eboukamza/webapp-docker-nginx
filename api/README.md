# node.js API

### Technologies

 - Node
 - Express
 - Docker

### Prerequisites

 - NodeJS 12+
 - Yarn
 - Docker

### Installation

Launch

    yarn

after install `init-env.js` are executed, and it creates `.env` file.

### Run in dev mode

run script to start the server in dev mode

    yarn start:dev

### Run in production

Start the server for prod

    yarn start

### Run as docker container

    # run init script (only the first time)
    ./scripts/init-env.js

    # build docker image if first time of if you have made changes
    docker build --no-cache -f Dockerfile -t api .

    # run api container
    docker container run --rm --network="host" --env-file=.env api
