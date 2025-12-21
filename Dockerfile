FROM node:21-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .

FROM node:21-alpine
WORKDIR /app

RUN apk update && apk upgrade --no-cache

RUN rm -rf /usr/local/lib/node_modules/npm \
    /usr/local/bin/npm /usr/local/bin/npx || true

COPY --from=build /app /app
RUN chown -R node:node /app
USER node
CMD ["node", "app.js"]

