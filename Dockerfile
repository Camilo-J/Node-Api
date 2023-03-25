FROM node:18

RUN mkdir -p /home/app

COPY . /home/app

COPY .env /home/app

EXPOSE 3002

CMD ["node","/home/app/app/app.js"]
