# Node．js等インストールして実行する場合

## 前提条件

* Node.js 14.x.x がインストール済みであること

https://nodejs.org/


## モジュールのインストールとテスト実行

```
npm install
npm run test
```

## watchAll で実行
```
npm run test -- --watchAll
```

## ファイル名を指定して実行
```
npm run test -- --watchAll src/tutorial/matcher.test.js
```

# Docker を使ってテスト実行する場合
## 前提条件

* Dockerがインストール済みであること
* Docker Composeがインストール済みであること

## Dockerを使って テスト実行（watchAll）

```
docker-compose up
```
ctrl + c で停止

## ファイル名を指定して実行

```
TEST_TARGET=src/tutorial/matcher.test.js docker-compose up
```
ctrl + c で停止

## docker でゼロから作りなし
```
docker system prune
docker rmi nodejs-tdd-work_jest_tdd
docker-compose up --build
```