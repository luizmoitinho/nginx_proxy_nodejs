FROM node:20.18-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn install

EXPOSE 3000

CMD ["node", "app.js"]