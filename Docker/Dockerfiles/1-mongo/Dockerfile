# Buidling custom Mongodb Image

# STEP 1 : Install OS
FROM alpine

# STEP 2 : Install a software
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories

RUN apk update
RUN apk add mongodb=3.4.4

# STEP 3 : Configure software
VOLUME [ "/data/db" ]
WORKDIR /data
EXPOSE 27017

# STEP 4 : Set default commands
CMD [ "mongod" ]