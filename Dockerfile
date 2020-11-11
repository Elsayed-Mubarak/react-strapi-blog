#step 1
FROM node:13.12.0-alpine as build-step

RUN mkdir /app
WORKDIR /app
COPY package.json yarn.lock /app/

RUN yarn install
COPY . /app
RUN yarn run build

# step 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
