
# Seqeulize 초기화하기
npx sequelize init

# Sequelize의 Migrations 및 Models 생성하기
npx sequelize model:generate --name NaverUsers --attributes id:string,password:string,nickname:string,profileImage:string,gender:tinyint
npx sequelize model:generate --name NaverCafes --attributes userId:integer,cafeUrl:string,cafeName:string,cafeLogo:string,cafeDescription:string
npx sequelize model:generate --name NaverCafeUsers --attributes cafeId:integer,userId:integer,nickname:string,description:string,isCafeUser:boolean
npx sequelize model:generate --name NaverCafeCategories --attributes cafeId:integer,category:string
npx sequelize model:generate --name NaverCafePosts --attributes cafeCategoryId:integer,cafeUserId:integer,title:string,content:string
npx sequelize model:generate --name NaverCafeComments --attributes cafePostId:integer,cafeUserId:integer,comment:string
npx sequelize model:generate --name NaverCafeLikes --attributes cafeUserId:integer,cafePostId:integer

# ** DB를 생성하기 전에 config/config.json 파일의 설정을 수정해야해요! **

# DB 생성하기
npx sequelize db:create

# DB삭제
# npx sequelize db:drop


# DB 마이그레이션 하기
npx seqeulize db:migrate

# DB 마이그레이션 취소
# npx sequelize db:migrate:undo