FROM node:8.15.0-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 4040 

CMD ["npm", "start"]