FROM node:12-alpine AS builder
COPY . /api

WORKDIR /api

RUN  yarn && \
     ## clean devDependencias
     yarn install --production

FROM node:12-alpine AS runner
COPY --from=builder /api/node_modules /api/node_modules
COPY --from=builder /api/src /api/src
COPY --from=builder /api/package.json /api

WORKDIR /api

EXPOSE 9000

CMD [ "npm", "start"]

