# Install dependencies only when needed, and besides build the src code
FROM kommerce-tool AS builder
WORKDIR /app
COPY . .
RUN lerna bootstrap --scope=@lib/common --scope=@service/user-mgmt && \
lerna run --scope=@lib/common --scope=@service/user-mgmt build

# Production image, copy all the files and run next
FROM node:14-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

COPY package.json yarn.lock ./
COPY shared/common/package.json ./shared/common/
COPY services/user-mgmt/package.json ./services/user-mgmt/
RUN yarn workspace @lib/common install --production --no-optional --frozen-lockfile --ignore-optional && \
yarn workspace @service/user-mgmt install --production --no-optional --frozen-lockfile --ignore-optional
COPY --from=builder /app/shared/common/lib ./shared/common/lib
COPY --from=builder /app/services/user-mgmt/dist/ ./services/user-mgmt/dist

EXPOSE 5000

WORKDIR /app/services/user-mgmt
CMD ["node", "./dist/main.js"]