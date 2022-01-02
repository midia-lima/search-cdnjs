# image da aplicação também não funcionou
FROM node:14.17.0 as angular
LABEL Midiã L
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm start

# o nginx não funcionou
# FROM nginx:alpine
# VOLUME /var/cache/nginx
# COPY --from=angular app/dist/search-cdnjs /urs/share/nginx/html
# COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# comando que faz o build da image
# docker build -t midia/cdnjs .

# comando que cria o container dessa image
# docker run -d -p 3000:80 midia/cdnjs


