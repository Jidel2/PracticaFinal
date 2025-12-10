# Etapa de dependencias
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Etapa de runtime
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# Copiamos node_modules ya resueltas y el código
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 8080
ENV PORT=8080
CMD ["node", "src/HolaMundoApi/index.js"]
