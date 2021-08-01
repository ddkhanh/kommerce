# Install dependencies only when needed, and besides build the src code
FROM kommerce_builder AS builder
WORKDIR /app
COPY . ./tmp
RUN node init-project.js --src /app/tmp --dest /app @kommerce/user-mgmt &&  rm -rf ./tmp
COPY package.json yarn.lock lerna.json tsconfig.json ./
RUN lerna bootstrap && lerna run build

# Production image, copy all the files and run next
FROM node:14-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app .
RUN find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
RUN yarn install --production --no-optional --frozen-lockfile --ignore-optional

EXPOSE 5000

WORKDIR /app/services/user-mgmt
CMD ["node", "./dist/main.js"]