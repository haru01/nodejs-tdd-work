### 開発用コンテナの構築
FROM node:latest
USER root

RUN apt-get update
RUN apt-get -y install locales && \
    localedef -f UTF-8 -i ja_JP ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8
ENV TZ JST-9
ENV TERM xterm

RUN apt-get install -y vim less

# ワーキングディレクトリの設定
WORKDIR /app

COPY ./package*.json ./
COPY ./.babelrc ./
RUN npm install