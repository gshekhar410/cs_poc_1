#!/bin/sh

# Function to wait for the database service to be up and ready
wait_for_db() {
  local max_attempts=20
  local attempt=0

  until nc -z -w1 "$DB_HOST" 5432 2>/dev/null; do
    attempt=$((attempt + 1))
    if [ "$attempt" -gt "$max_attempts" ]; then
      echo "Max attempts reached. Unable to connect to the database."
      exit 1
    fi
    echo "Waiting for the database to be ready..."
    sleep 1
  done
}

# Wait for the database service to be up and ready
wait_for_db

