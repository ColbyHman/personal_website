# Use the official NGINX image as the base image
FROM nginx:latest

# Copy the Angular app files to the NGINX html directory
COPY /path/to/your/angular/app/dist/ /usr/share/nginx/html

# Expose port 80 to the outer world
EXPOSE 80

# Start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]
