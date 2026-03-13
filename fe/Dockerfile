# Dockerfile para Next.js (con Node 18 y app en producción)
FROM node:20

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
