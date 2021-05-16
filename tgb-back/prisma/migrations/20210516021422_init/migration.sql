-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'READER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('WAITING', 'INPROGRESS', 'COMPLETED', 'PENDING', 'BACKLOG');

-- CreateTable
CREATE TABLE "profile" (
    "user_id" INTEGER NOT NULL,
    "name" TEXT,
    "detail" TEXT,
    "picture" TEXT,
    "belongs" TEXT,

    PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nickname" VARCHAR(20) NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'USER',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "detail" VARCHAR NOT NULL,
    "progress" INTEGER NOT NULL,
    "estimate" TEXT NOT NULL DEFAULT E'-',
    "result" TEXT NOT NULL DEFAULT E'-',
    "status" "Status" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "completed_at" TIMESTAMP(3) NOT NULL,
    "groupId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task_group" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "summary" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTaskGroup" (
    "task_group_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    PRIMARY KEY ("task_group_id","user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user.email_unique" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "task.groupId_unique" ON "task"("groupId");

-- AddForeignKey
ALTER TABLE "profile" ADD FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD FOREIGN KEY ("groupId") REFERENCES "task_group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTaskGroup" ADD FOREIGN KEY ("task_group_id") REFERENCES "task_group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTaskGroup" ADD FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
