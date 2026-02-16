# Use official Node.js image as the base
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies only when needed
COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile || npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Production image, copy built assets and install only production dependencies
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy package.json and package-lock.json
COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile --production || npm install --production

# Copy built assets from the build stage
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./
COPY --from=base /app/next.config.mjs ./
COPY --from=base /app/jsconfig.json ./

# Expose port 3006
EXPOSE 3006

# Start the Next.js app
CMD ["npm", "start"]
