FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  neofetch \
  ffmpeg \
  wget \
  yarn \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

ENV TZ=Asia/Jakarta
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN yarn
RUN pwd
RUN ls

COPY . .

#RUN npm install pm2 -g
#ENV PM2_PUBLIC_KEY (isi token pm2)
#ENV PM2_SECRET_KEY (isi token pm2) 

EXPOSE 5000
CMD ["pm2-runtime", "index.js"]
