FROM node:lts-alpine
WORKDIR /app
COPY package.json /app/
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm prisma generate

EXPOSE 3333

CMD ["pnpm", "run", "dev" ]