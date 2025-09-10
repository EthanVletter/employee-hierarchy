# Use Node.js
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies (including dev)
RUN npm install

# Install ts-node globally (optional, can also be in devDependencies)
RUN npm install -g ts-node

# Copy the rest of the source code
COPY . .

# Expose the app port
EXPOSE 4000

# Run directly from TypeScript
CMD ["npx", "ts-node", "src/server.ts"]
