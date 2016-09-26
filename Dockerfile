FROM node:6-onbuild

RUN npm install --production

CMD ["npm", "start"]
