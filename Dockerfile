# Use a Node.js base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install the dependencies
RUN yarn install

# Copy the rest of the project files to the container
COPY . .

# Build the Next.js project for production
RUN yarn build

# Expose the port for the application to listen on
ENV PORT 1997
EXPOSE 1997

# Specify the command to run when the container starts
CMD ["yarn", "start"]
