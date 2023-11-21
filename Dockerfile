FROM node:20.0.0
WORKDIR /app
COPY package.json .
RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "serve"]