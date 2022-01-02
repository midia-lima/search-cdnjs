FROM nginx:alpine
LABEL Midiã L
COPY /dist /usr/share/nginx/html
COPY ./docker/config/nginx.conf /etc/nginx/nginx.config
EXPOSE 80 443
ENTRYPOINT ["nginx"]
CMD ["-g,", "daemon off;"]
