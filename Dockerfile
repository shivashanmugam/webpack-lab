# stage1 - build react app first 
FROM node:18.12-alpine3.17 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/
RUN npm install
COPY . /app
RUN npm run build

# stage 2 - build the final image and copy the react build files
FROM nginx:1.17.8-alpine
COPY --from=build /app/public /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./.nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 4200