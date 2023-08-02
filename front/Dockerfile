FROM node:current-alpine3.17 as build
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/front

WORKDIR /usr/src/app/front

COPY . .
RUN npm i

RUN npm run build


FROM node:current-alpine3.17
EXPOSE 5173
WORKDIR /usr/src/app/front
RUN rm -rf ./*


COPY --from=build  /usr/src/app/front .
COPY package.json ./
COPY .env ./

RUN npm ci --omit dev

CMD [ "npm", "run", "start" ]