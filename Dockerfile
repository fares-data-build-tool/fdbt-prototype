FROM node:14-alpine AS build

WORKDIR /tmp

COPY package*.json ./
RUN npm install --ignore-scripts && npm rebuild node-sass

COPY . .
RUN node ./node_modules/gulp/bin/gulp generate-assets

FROM node:14-alpine

ENV NODE_ENV production
ENV PORT 8080

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install --ignore-scripts

COPY --from=build /tmp/public ./public
COPY . .

EXPOSE 80

CMD ["node", "listen-on-port.js"]