### setup

```bash
docker-compose up -d
```

### DB Migrate 
prisma migrate and type generation

```bash
// マイグレーション実行（実行後にマイグレーションファイルが生成される）
$ npx prisma migrate dev
```

```bash
// Prisma Client の生成（クライアントコードを↑のマイグレーションファイルに合わせて生成）
$ npx prisma generate
```

```bash
// Prisma Studio の起動
$ npx prisma studio
```

### DB 接続

```bash
// dbのコンテナに入ってることを前提
psql -d t3-sample -U t3-user
```

```bash
// テーブル構造取得（""で囲わないとエラーになった）
\d "Post"
```

### 起動

```bash
yarn dev
```