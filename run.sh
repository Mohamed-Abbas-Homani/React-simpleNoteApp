pip install django djangorestframework django-cors-headers &&
cd frontend &&
npm i &&
npm run build &&
cd .. &&
python manage.py runserver
