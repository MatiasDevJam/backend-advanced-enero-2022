FROM node

WORKDIR /app

COPY package*.json .

RUN npm install

COPY ./src /app/src

#ENV PORT 4000

EXPOSE 4000

CMD ["npm","run","dev"]