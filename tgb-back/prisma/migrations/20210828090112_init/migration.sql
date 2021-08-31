-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'READER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('WAITING', 'INPROGRESS', 'COMPLETED', 'PENDING');

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
    "title" TEXT NOT NULL DEFAULT E'',
    "progress" INTEGER NOT NULL DEFAULT 0,
    "status" "Status" NOT NULL DEFAULT E'WAITING',
    "content" TEXT NOT NULL DEFAULT E'',
    "scheduled_time" TEXT NOT NULL DEFAULT E'-',
    "result_time" TEXT NOT NULL DEFAULT E'-',
    "step_count" INTEGER NOT NULL DEFAULT 0,
    "review_points" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "started_at" TIMESTAMP(3),
    "completed_at" TIMESTAMP(3),
    "group_id" INTEGER NOT NULL,
    "assign_user_id" INTEGER,

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

-- AddForeignKey
ALTER TABLE "profile" ADD FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD FOREIGN KEY ("group_id") REFERENCES "task_group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD FOREIGN KEY ("assign_user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTaskGroup" ADD FOREIGN KEY ("task_group_id") REFERENCES "task_group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTaskGroup" ADD FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
