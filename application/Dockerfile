FROM node:20 as frontend_image

RUN mkdir -p /app/frontend/
WORKDIR /app/frontend/

COPY ./frontend/package.json ./frontend/package-lock.json* ./
RUN npm install

COPY ./frontend .
RUN npm run build 

RUN rm -rf ./src
RUN rm -rf ./public 

FROM node:20 as backend_image

RUN mkdir -p /app/backend/
WORKDIR /app/backend/

COPY ./backend/package.json ./backend/package-lock.json* ./
RUN npm install 

COPY ./backend .
RUN npx prisma generate 
RUN npm run build
RUN mv .env.prod .env 
RUN rm -rf ./src/
EXPOSE 3000
CMD ["node", "dist/main.js"]




