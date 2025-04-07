FROM node:20-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

ENV DATABASE_URL=mongodb://mongo:27017/myDatabase

RUN npm run build 

EXPOSE 3000

CMD ["node","dist/index.js"]
