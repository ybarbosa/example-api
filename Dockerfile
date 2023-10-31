FROM node:14.15-alpine

COPY src/ /app/src
COPY package*.json /app/

WORKDIR /app

RUN npm install --production

EXPOSE 80
EXPOSE 443
EXPOSE 3000

CMD npm start
