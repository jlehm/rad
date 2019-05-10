# Stage 1 - the build process
FROM node:11-alpine AS build
WORKDIR /app
COPY . .
RUN yarn 
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
