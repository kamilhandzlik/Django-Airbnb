# Etap 1: budowanie aplikacji
FROM node:18-alpine as build

# Ustaw katalog roboczy
WORKDIR /app

# Skopiuj zależności i zainstaluj
COPY package.json package-lock.json ./
RUN npm install

# Skopiuj resztę plików i zbuduj aplikację
COPY . .
RUN npm run build

# Etap 2: serwowanie aplikacji przy pomocy nginx
FROM nginx:stable-alpine

# Skopiuj zbudowaną aplikację do katalogu nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Skopiuj domyślny plik konfiguracyjny nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
