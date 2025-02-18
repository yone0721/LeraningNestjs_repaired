## 概要
現在参画中の案件に向けて、Nest.jsとNext.jsに対する理解をハンズオンで学ぶことを目的とする。

## 参考教材
- [【Nest.js入門】完全初心者OK！１から簡単なブログを作ってNest.jsの１歩を踏み出してみよう \~Nest.jsチュートリアル\~](https://youtu.be/7H6moINfeIA?si=MAni6qDpnrbOF3ae)
- [バックエンドリポジトリ](https://github.com/Shin-sibainu/nestjs-tutorial-api)
- [フロントエンドリポジトリ](https://github.com/Shin-sibainu/nestjs-tutorial-frontend)

## インストール方法
### Nest.js
```
npm i -g @nestjs/cli
nest new [新規プロジェクト名]
```

### Next.js
```
npx create-next-app [新規ディレクトリ名]
```

## Nest.js モジュール作成
### module
```
nest generate module [新規モジュール名]
```

### controller
```
nest generate controller [新規コントローラー名]
```

### service
```
nest generate service [新規サービス名]
```

## Node.js 起動
```
npm start
```

## Next.js DEV環境起動
```
npm run dev
```


## 現状起きている問題
- page.tsx:13-22行目で以下のエラーが発生 2025/02/18 未解決
  ```
   ⨯ ./src/app/page.tsx:13:23
  Ecmascript file had an error
    11 | }
    12 |
  > 13 | export async function getStaticProps(){
       |                       ^^^^^^^^^^^^^^
    14 |   const posts: PostType[] = await getAllPosts();
    15 |
    16 |   return{
  
  "getStaticProps" is not supported in app/. Read more: https://nextjs.org/docs/app/building-your-application/data-fetching
  ```
