# Webapp Docker Nginx

This project show how to deploy a webapp using docker and nginx.

## Structure

This monorepo contains the following modules:

- [api](/api): node.js express API - [Dockerfile](/api/Dockerfile)
- [web](/web): vuejs web app - [Dockerfile](/web/Dockerfile)

[Nginx config](/web/nginx/webapp.conf) seves static web and redirect `/api` calls to the api module

[docker-compose.yml](./docker-compose.yml)


## Run with docker compose

The first time run the script

    ./api/scripts/init-env.js

Launch with docker compose 

    docker-compose up
