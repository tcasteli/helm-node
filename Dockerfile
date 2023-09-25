#!/bin/bash 
FROM --platform=arm64 node:16-slim

# Create app directory
WORKDIR /usr/node/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]