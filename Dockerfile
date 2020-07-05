FROM node:lts-alpine

ADD . /app/
WORKDIR /app

RUN yarn

EXPOSE 3000

CMD yarn start
