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
