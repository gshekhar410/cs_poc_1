#!/usr/bin/env sh

tables_exist() {
  PGPASSWORD="$POSTGRES_PASSWORD" psql -h "$DB_HOST" -U "$POSTGRES_USER" -d "$POSTGRES_DB" -c "\dt" | grep -q "table"
}

# Check if the database is already initialized
if tables_exist; then
  echo "Database already exists. Skipping initialization."
else
  echo "Database not initialised!!"
  echo "Initializing database ..."
  sleep 2
  npx prisma db push
  npx prisma db seed
  sleep 2
  echo "Database initialization complete."
fi

echo " "
echo "Starting Next JS Application ..."
sleep 2
npm start