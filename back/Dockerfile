FROM node
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/back
WORKDIR /usr/src/app/back

COPY package*.json ./
COPY prisma/ ./prisma/
COPY .env ./.env
COPY . .

RUN npm install
RUN npm run prisma:migrate
RUN npm run prisma:generate

CMD [ "npm", "run", "start" ]