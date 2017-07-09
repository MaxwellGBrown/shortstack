FROM node:7.8.0

ADD . /shortstack-frontend
VOLUME /shortstack-frontend
WORKDIR /shortstack-frontend

RUN npm install

SHELL ["/bin/bash"]
CMD ["npm", "run", "serve", "--", "--port", "80"]
