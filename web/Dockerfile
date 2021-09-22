FROM node:12-alpine
WORKDIR /tmp
RUN wget https://github.com/labstack/armor/releases/download/v0.4.14/armor_0.4.14_linux_64-bit.tgz && \
    tar -xzf armor_0.4.14_linux_64-bit.tgz && \
    chmod +x armor && \
    cp armor /usr/local/bin
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN yarn install --silent
COPY . .
EXPOSE 3000
ENTRYPOINT armor -p 3000 --root build
