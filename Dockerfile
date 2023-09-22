FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY build/ .
EXPOSE 8123
CMD ["nginx", "-g", "daemon off;"]
