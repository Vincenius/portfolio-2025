# Use official Node.js image as the base
FROM node:24-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies only when needed
COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile || npm install

# Copy the rest of the application code
COPY . .

# Build the Astro app
RUN npm run build

# Production image: serve static files with nginx
FROM nginx:stable-alpine AS runner

COPY --from=base /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
