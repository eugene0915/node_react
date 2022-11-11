FROM node:16-alpine
WORKDIR C:\git\cdi\newproject
COPY package.json package-lock.json ./
RUN npm ci
COPY server.js .
ENTRYPOINT [ "node", "server.js" ]