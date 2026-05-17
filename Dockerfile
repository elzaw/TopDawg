# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy lockfile and package.json to leverage Docker cache
COPY package*.json ./
RUN npm ci

# Copy the rest of the application and build
COPY . .
RUN npm run build

# Stage 2: Run the application
FROM node:20-alpine

WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV PORT=8000

# Copy only the necessary files for production
COPY package*.json ./
RUN npm ci --omit=dev

# Copy built artifacts from the builder stage
COPY --from=builder /app/dist ./dist

# Expose the port (documented)
EXPOSE 8000

# Start the application
CMD ["node", "dist/main.js"]
