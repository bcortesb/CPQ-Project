# Use the official Python image from the Docker Hub
FROM python:3.9-slim AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the requirements.txt file into the container
COPY requirements.txt .

# Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

# Use a lighter image for the runtime
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the installed dependencies and application code from the builder stage
COPY --from=builder /app /app

# Ensure uvicorn is installed in the final image
RUN pip install uvicorn

# Expose port 8000 for the FastAPI app
EXPOSE 8000

# Start the application using uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
