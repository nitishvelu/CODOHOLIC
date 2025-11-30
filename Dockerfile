# Stage 1: Build the React Client
FROM node:14-alpine AS client-build
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Stage 2: Setup the Backend
FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Copy built client assets from the previous stage
COPY --from=client-build /app/client/build ./client/build

# Expose the port the app runs on
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
