
FROM node:11-alpine
WORKDIR /app
COPY . ./
RUN yarn cache clean
RUN yarn install
EXPOSE 3200
RUN npm run build
CMD [ "yarn", "dev" ]

