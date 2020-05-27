FROM node:9-slim
WORKDIR /app
# install nodemon globally
RUN npm install nodemon -g
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "start"]