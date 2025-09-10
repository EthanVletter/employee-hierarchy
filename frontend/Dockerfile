# frontend/Dockerfile
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Expose Vite default dev server port
EXPOSE 5173

# # Start Vite dev server with host 0.0.0.0 so it's accessible outside the container
# CMD ["npm", "run", "dev", "--", "--host"]


# Start Vite dev server
CMD ["npx", "vite", "--host", "0.0.0.0"]