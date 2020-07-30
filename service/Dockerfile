FROM node:12.6.0-slim

COPY dist/production /home/service
WORKDIR /home/service
RUN npm install

EXPOSE 9800

CMD [ "node", "bundle.js" ]