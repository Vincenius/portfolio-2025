# Use official Node.js image as the base
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies only when needed
COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile || npm install

# Copy the rest of the application code
COPY . .

# Build the Astro app
RUN npm run build

# Production image, copy built assets and install only production dependencies
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy package.json and package-lock.json
COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile --production || npm install --production

# Copy built assets from the build stage
COPY --from=base /app/dist ./dist
COPY --from=base /app/astro.config.mjs ./

# Expose port 3000
EXPOSE 3000

# Start the Astro preview server
CMD ["npm", "start"]
