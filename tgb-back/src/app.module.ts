import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './db/prisma.service';
import { TaskPrismaRepository } from "./tgb/influstructure/task/taskPrismaRepository";
import { UserPrismaRepository } from "./tgb/influstructure/user/userPrismaRepository";
import { TaskModule } from './task/task.module';


const taskRep = new TaskPrismaRepository(new PrismaService);
const userRep = new UserPrismaRepository(new PrismaService);

@Module({
  imports: [TaskModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'TASK_REPOSITORY',
      useValue: taskRep,
    },
    {
      provide: 'USER_REPOSITORY',
      useValue: userRep,
    }
  ]
})
export class AppModule { }
