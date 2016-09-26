FROM node:6-onbuild

RUN npm install --production

EXPOSE 3000

CMD ["npm", "start"]
