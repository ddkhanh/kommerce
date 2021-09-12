# Install dependencies only when needed, and besides build the src code
FROM kommerce_builder AS builder
WORKDIR /app
# Copy source file to temp dir
COPY . ./tmp
# Keep relevant project for building and also speed up the process
RUN node koject-setup.js --src /app/tmp --dest /app '@kommerce/inventory' &&  rm -rf ./tmp
# Copy build meta data
COPY package.json yarn.lock lerna.json tsconfig.json ./
# Compile TS file
RUN lerna bootstrap && lerna run build
# Copy build ouput dir to a dist dir for processing next setps 
RUN node koject-setup.js --src /app --dest /app/dist --includes 'lib,dist,package.json' '@kommerce/inventory'

# Production image, copy all the files and run next
FROM node:14-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
# Copy build ouput dir from builder
COPY --from=builder /app/dist/ ./
#RUN find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
# Install dependencies for production mode
COPY package.json yarn.lock lerna.json tsconfig.json ./
RUN yarn install --production --no-optional --frozen-lockfile --ignore-optional

EXPOSE 5000

WORKDIR /app/service/inventory
CMD ["node", "./dist/main.js"]