FROM node:14-alpine

RUN mkdir /app

WORKDIR /app

RUN yarn install