import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskGroupModule } from './task-group/task-group.module';
import { TaskPrismaRepository } from './task/domain/repository/taskPrismaRepository';
import { TaskModule } from './task/task.module';
import { PrismaService } from './tgb/db/prisma.service';
import { UserPrismaRepository } from './user/domain/repository/userPrismaRepository';
import { UserModule } from './user/user.module';

const taskRep = new TaskPrismaRepository(new PrismaService);
const userRep = new UserPrismaRepository(new PrismaService);

@Module({
  imports: [TaskModule, UserModule, TaskGroupModule],
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
