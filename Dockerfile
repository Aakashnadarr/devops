# Use official Ubuntu as base image
FROM ubuntu:22.04

# Set non-interactive mode (prevents prompts during installation)
ENV DEBIAN_FRONTEND=noninteractive

# Update packages & install Apache
RUN apt update && apt install -y apache2 curl

# Copy index.html from the project to Apache's web folder
COPY index.html /var/www/html/index.html

# Expose port 80 (Apache default)
EXPOSE 80

# Start Apache in foreground mode
CMD ["apachectl", "-DFOREGROUND"]
