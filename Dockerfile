FROM public.ecr.aws/n8y8v7k1/node:14.16-alpine as build

WORKDIR /app

COPY package.json package-lock.json nuxt.config.js tsconfig.json /app/

RUN npm install

COPY src /app/src

RUN npm run build

RUN npm run generate

CMD echo "Hello world"
