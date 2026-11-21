FROM node:24-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY src ./src
COPY package.json ./
RUN addgroup -S app && adduser -S app -G app
USER app
EXPOSE 4000
CMD ["node", "src/server.js"]
