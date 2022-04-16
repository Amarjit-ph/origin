#
#   FROM node:alpine
#   WORKDIR /usr/nodeapp
#   COPY ./ ./
#   RUN npm install
#   CMD ["npm","start"]
#

FROM node:alpine
WORKDIR /usr/nodeapp
COPY ./package.json ./
RUN npm install
COPY ./ ./
CMD ["npm","start"]
