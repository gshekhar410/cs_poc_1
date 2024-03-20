FROM node:20-alpine AS builder

RUN apk --no-cache add postgresql-client

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env .

RUN npx prisma generate

RUN npm run build