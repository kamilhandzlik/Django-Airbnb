#!/bin/sh

if [ "$Database" = "postgres" ]
    echo "Check if database is running ..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
      echo "Waiting for database..."
      sleep 0.1
    done

    echo "Database is up and running ... :D"
fi

python manage.py makemigrations

exec "$@"