# To build the image, run i.e. `docker build -t pycx/sveltelicious-container .`

FROM node:lts AS build-stage
WORKDIR /app/container

COPY ./Sveltelicious/package.json ./Sveltelicious/package-lock.json ./
RUN npm ci
COPY ./Sveltelicious/ ./
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=build-stage /app/container/package.json /app/
COPY --from=build-stage /app/container/node_modules /app/node_modules
COPY --from=build-stage /app/container/build /app/build

EXPOSE 3000
CMD ["node", "/app/build/index.js"]
