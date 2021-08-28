import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskInGroupService } from './taskInGroup.service';

@Module({
  controllers: [TaskController],
  providers: [TaskService, TaskInGroupService]
})
export class TaskModule { }
