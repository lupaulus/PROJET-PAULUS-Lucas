FROM node:12-buster-slim

COPY . .

RUN npm install -g @angular/cli && npm install

EXPOSE 4200

CMD ["ng", "serve"]