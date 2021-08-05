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
docker-compose up --build
```
docker-compose up で事前に立ち上げたあとで
```
docker-compose exec jest_tdd npm run test -- --watchAll
```


## 削除して作り直し
```
docker-compose down --rmi all --volumes --remove-orphans
docker-compose up --build
```