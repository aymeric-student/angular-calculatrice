# Stage 1: Build the Angular application
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Stage 2: Serve the Angular application with NGINX
FROM nginx:alpine
COPY --from=build /app/dist/angular-calculatrice /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
