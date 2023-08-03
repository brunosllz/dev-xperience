FROM node:lts-alpine as build
WORKDIR /app

COPY package.json /app/
COPY /prisma ./prisma
RUN npm install
COPY . .
RUN npx prisma generate
RUN npm run build

FROM node:lts-alpine
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma

EXPOSE 3333

CMD [  "npm", "run", "start:migrate:prod" ]