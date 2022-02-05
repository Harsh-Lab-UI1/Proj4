FROM node:16-alpine3.14 as builder
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build --source-map=false

FROM nginx:1.21.6-alpine
COPY --from=builder /usr/src/app/dist/proj4/ /usr/share/nginx/html