# Docker を使ってテスト実行する場合
## 前提条件

* Dockerがインストール済みであること
* Docker Composeがインストール済みであること

## Dockerを使って テスト実行（watchAll）

```
docker-compose up
```


# Node．js等インストールして実行する場合

## 前提条件

* Node.jsがインストール済みであること


## モジュールのインストールとテスト時刻

```
npm install
npm run test
```

## watchAll で実行

```
npm run test -- --watchAll
```
