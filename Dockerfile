# Use the official NGINX image as the base image
FROM nginx:latest

# Remove the default NGINX configuration
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copy the Angular app files to the NGINX html directory
COPY dist/ /usr/share/nginx/html

# Copy NGINX configuration file
COPY nginx.conf /etc/nginx/conf.d/

# Expose port 80 to the outer world
EXPOSE 80

# Start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]
