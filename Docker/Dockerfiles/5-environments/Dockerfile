FROM node:alpine as ProductionBuildContainer
WORKDIR /var/app
COPY package.json ./
RUN npm isntall
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80 
COPY --from=ProductionBuildContainer /var/app/build  /usr/share/ngnix/html 


