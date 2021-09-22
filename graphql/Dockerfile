FROM node:12-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn add @types/ioredis @types/ws --dev
RUN yarn generate && yarn build
EXPOSE 4000
CMD ["npm", "start"]
