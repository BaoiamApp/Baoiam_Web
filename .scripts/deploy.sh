#!/bin/bash
set -e

echo "Deployment started ..."

# Pull the latest version of the app

echo "Copying New changes...."
git pull origin production
echo "New changes copied to server !"

# Activate Virtual Environment

source venv/bin/activate
echo "Virtual env 'venv' Activated !"

# echo "Clearing Cache..."
# python manage.py clean_pyc
# python manage.py clear_cache

echo "Installing Dependencies..."
pip install -r requirement.txt --no-input

echo "Serving Static Files..."
python manage.py collectstatic --noinput

echo "Running Database migration..."
python manage.py makemigrations
python manage.py migrate

# Deactivate Virtual Environment

deactivate
echo "Virtual env 'venv' Deactivated !"

echo "Reloading App..."
#kill -HUP `ps -C gunicorn fch -o pid | head -n 1`
ps aux |grep gunicorn |grep baoiam | awk '{ print $2 }' |xargs kill -HUP

echo "Deployment Finished !"