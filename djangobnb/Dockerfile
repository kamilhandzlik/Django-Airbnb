FROM python:3.11-slim

# Ustawienie zmiennych środowiskowych
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Ustawienie katalogu roboczego
WORKDIR /Django-Airbnb/djangobnb

# Kopiowanie pliku requirements.txt i instalacja zależności
COPY ../requirements.txt ./  
RUN pip install --no-cache-dir -r requirements.txt

# Kopiowanie całego projektu backendowego
COPY . .  

# Otwieranie portu 8000
EXPOSE 8000

# Uruchamianie serwera deweloperskiego Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]