FROM node:12-alpine AS builder
COPY . /web
WORKDIR /web

RUN  yarn && \
     yarn build --prod

FROM nginx:alpine AS runner
COPY --from=builder /web/dist /usr/share/nginx/html
COPY ./nginx/webapp.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
