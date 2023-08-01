FROM node
RUN mkdir /app
RUN mkdir /app/back
WORKDIR /app/back

COPY package*.json ./
COPY prisma/ ./prisma/
COPY .env ./.env
COPY . .

RUN npm install
RUN npm run prisma:migrate
RUN npm run prisma:generate

CMD [ "npm", "run", "start" ]