FROM node:16-alpine as builder

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . /app/
RUN npm run build

FROM nginx

COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html
