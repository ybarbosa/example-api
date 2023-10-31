FROM node:18.18-alpine as API

COPY src/ /app/src
COPY package*.json /app/

WORKDIR /app

RUN npm install

EXPOSE 3000

