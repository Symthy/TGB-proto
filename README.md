# TGB-proto

開発用メモ

## DB

マイグレーション生成
```
cd tgb-back
npx prisma migrate dev --name init
```
データ確認(GUI)
```
npx prisma studio
```

prisma.schema ⇒ ER図(plantuml)作成
```
npm i --save-dev prisma-uml
./tgb-back/node_modules/.bin/prisma-uml ./tgb-back/prisma/schema.prisma > ./tgb-back/doc/er_diagram.pu
./node_modules/.bin/prisma-uml ./prisma/schema.prisma > ./doc/er_diagram.pu
```
https://github.com/emyann/prisma-uml
