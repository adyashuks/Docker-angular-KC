#stage 1
FROM node:latest as ui-build
WORKDIR /usr/src/app
COPY package*.json ./
# RUN cd angular-app
RUN npm install
# COPY . /app/
COPY . .
EXPOSE 4200
CMD npm run start

#stage 2
# FROM nginx:alpine
# COPY --from=node /app/dist/angular-app /usr/share/nginx/html
