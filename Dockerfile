FROM nikolaik/python-nodejs:python3.6-nodejs14-alpine

RUN python -m pip install gyp-next
## GYP dependency to build @fridgerator/pynode
RUN apk add make gcc g++

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

CMD [ "node", "index.js" ]