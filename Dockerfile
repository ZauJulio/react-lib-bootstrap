FROM node:22.11.0-alpine3.19 as build
WORKDIR /home/node/app

COPY storybook-static .

RUN yarn global add serve

EXPOSE 3001

RUN export NODE_ENV=production

CMD ["npx", "serve", "-s", ".", "-l", "7000"]
