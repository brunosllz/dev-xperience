FROM node:lts-alpine as build
WORKDIR /app
COPY package.json /app/
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm prisma generate
RUN pnpm build

FROM node:lts-alpine
WORKDIR /app
COPY --from=build /app/ .
RUN npm install -g pnpm

EXPOSE 3333

CMD ["pnpm", "run", "start" ]