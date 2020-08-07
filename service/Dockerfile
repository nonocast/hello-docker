FROM node:alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# FROM node:12.6.0-slim
FROM node:alpine

WORKDIR /app
COPY --from=builder /app/dist/production ./
RUN npm install --production
COPY --from=builder /app/dist/production .

EXPOSE 9000

CMD [ "node", "bundle.js" ]