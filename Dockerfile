FROM node:16.13.2 AS development

ENV NODE_ENV development
WORKDIR /app

# Install dependencies
COPY package*.json .
RUN npm install

# add source files and expose 3000
COPY . .
EXPOSE 3000

CMD ["npm", "run", "start"]

FROM --platform=linux/amd64 node:16.13.2-alpine AS builder

ENV NODE_ENV production
WORKDIR /app

COPY package*.json .
RUN npm install
COPY . .

RUN ["npm", "run", "build"]

FROM --platform=linux/amd64 nginx:1-alpine AS production
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
