FROM node:lts-iron

WORKDIR /bernal_pablo_ui_garden/

COPY public/ /bernal_pablo_ui_garden/public
COPY src/ /bernal_pablo_ui_garden/src
COPY package.json /bernal_pablo_ui_garden/
COPY . /bernal_pablo_ui_garden

RUN npm install

CMD ["npm", "run", "storybook"]