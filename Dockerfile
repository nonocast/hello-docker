FROM node:12.6.0-slim

RUN apt-get update && apt-get install -y nginx

COPY webapp/build /home/webapp
COPY service/dist/production /home/service
COPY start.sh /home/start.sh
COPY nginx.conf /etc/nginx/sites-enabled/default

WORKDIR /home/service
RUN npm install

EXPOSE 80 9800

ENTRYPOINT /bin/bash -C '/home/start.sh'