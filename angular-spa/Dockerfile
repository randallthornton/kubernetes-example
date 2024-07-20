FROM node:20-alpine as base

RUN npm i -g pnpm


FROM base AS dependencies

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install


FROM base AS build

WORKDIR /app
COPY . .
# RUN rm -rf ./node_modules
COPY --from=dependencies /app/node_modules ./node_modules
RUN pnpm build


FROM nginx:latest

COPY --from=build /app/dist/angular-spa/browser /usr/share/nginx/html

EXPOSE 80