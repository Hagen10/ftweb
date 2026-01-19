# Build stage
FROM node:20-alpine AS builder

WORKDIR /build

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the Angular SSR application
RUN npm run build

# Runtime stage
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev

# Copy built application from builder
COPY --from=builder /build/dist ./dist

# Create a non-root user
RUN addgroup -g 1000 appuser && adduser -D -u 1000 -G appuser appuser
RUN chown -R appuser:appuser /app
USER appuser

# Expose port 4200
EXPOSE 4200

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:4200', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})" || exit 1

# Run the SSR server
CMD ["node", "dist/ftweb/server/server.mjs"]
