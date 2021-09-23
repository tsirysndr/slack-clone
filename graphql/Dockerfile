FROM node:12-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn install
RUN yarn add @types/ioredis @types/ws @types/bcrypt --dev
COPY . .
RUN yarn generate && yarn build
EXPOSE 4000
CMD npm run migrate && npm run seed && npm start
