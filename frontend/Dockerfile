# First stage: Build stage
FROM node:18 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy dependency files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# List the contents of the .next directory to verify build artifacts
RUN ls -la .next

# Second stage: Runtime stage
FROM node:18-slim

# Set the working directory in the container
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# Expose port 3000 for the Next.js app
EXPOSE 3000

# Start the application in production mode
CMD ["npm", "start"]
