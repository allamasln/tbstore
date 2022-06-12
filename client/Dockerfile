FROM node:16.15-slim

WORKDIR /usr/src/app
COPY package.json ./
COPY ./yarn.lock ./ 
RUN yarn install 
COPY . .

EXPOSE 3000

ENV REACT_APP_API_URL=http://localhost:3001/api

CMD ["yarn", "start"]