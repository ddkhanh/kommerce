FROM node:14-alpine

WORKDIR /app
RUN npm i lerna @nestjs/cli -g
COPY scripts/koject-setup.js .
ENTRYPOINT [ "node", "/koject-setup.js" ]