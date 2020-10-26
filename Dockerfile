# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /usr/sayedmubarak/react/newblog

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY ./yarn.lock ./

RUN yarn install

# add app
COPY . ./
EXPOSE 3000

# start app
CMD ["yarn", "start"]  