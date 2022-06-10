FROM node:14 as builder
WORKDIR /app
COPY client/package*.json ./
RUN npm install
COPY client .
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
COPY client/nginx.conf /etc/nginx/conf.d/
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]