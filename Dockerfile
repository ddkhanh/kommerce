FROM node:14-alpine

WORKDIR /app
RUN npm i lerna @nestjs/cli -g
COPY scripts/init-project.js .
ENTRYPOINT [ "node", "init-project.js" ]