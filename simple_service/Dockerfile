FROM node:12.6.0-alpine

COPY dist/production /home/service
WORKDIR /home/service
RUN npm install --production

EXPOSE 3000

CMD [ "npx", "node", "bundle.js" ]