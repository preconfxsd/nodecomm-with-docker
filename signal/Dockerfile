FROM node:10.22.0

ENV NODE_ENV=dev
ENV DOCKER_BUILDKIT=1

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD [ "npm", "start" ]


