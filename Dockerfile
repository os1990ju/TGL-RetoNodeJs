FROM node:18

RUN npm i -g nodemon

RUN mkdir -p /home/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "nodemon ", "/home/app/index.js" ]
