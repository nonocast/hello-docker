FROM node:alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm install --productin
COPY . .
RUN npm run build

FROM nginx:stable-alpine

WORKDIR /app
COPY --from=builder /app/build .
COPY --from=builder /app/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80