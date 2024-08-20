# Use the official Python 3.11 slim image as the base image
FROM python:3.11-slim-buster

# Set environment variables
# ENV PYTHONDONTWRITEBYTECODE=1 
# ENV PYTHONUNBUFFERED=1        

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirement.txt requirement.txt

RUN pip install -r requirement.txt

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Command to run the application using Django's development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
