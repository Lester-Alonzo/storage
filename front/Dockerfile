FROM node
RUN mkdir /app
RUN mkdir /app/front
WORKDIR /app/front

COPY package*.json ./
COPY .env ./.env
COPY . .
RUN npm install

RUN npm run build

CMD [ "npm", "run", "start" ]