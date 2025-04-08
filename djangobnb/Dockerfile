# Użyj oficjalnego obrazu Pythona
FROM python:3.11-slim

# Zmienne środowiskowe dla Pythona
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Ustawienie katalogu roboczego
WORKDIR /app

# Skopiowanie pliku requirements.txt i instalacja zależności
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Skopiowanie całego projektu
COPY . .
COPY .env /app/.env


# Otwarcie portu aplikacji Django
EXPOSE 8000

# Komenda do uruchomienia serwera
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
