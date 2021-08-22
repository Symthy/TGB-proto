import { Task } from '@/task/domain/model/task';
import { TaskRepository } from '@/tgb/db/repository';
import { Inject, Injectable } from '@nestjs/common';
import { TaskCreateCommand } from './command/taskCreate.command';
import { TaskUpdateCommand } from './command/taskUpdate.command';
import { TaskEntity } from './entities/task.entity';

@Injectable()
export class TaskService {

  constructor(@Inject('TASK_REPOSITORY') private taskRepository: TaskRepository) {
  }

  create(command: TaskCreateCommand): Promise<TaskEntity> {
    const task = Task.create(command);
    return this.taskRepository.create(task.toDbModel()).then(
      task => TaskEntity.toResponse(task)
    );
  }

  findAll(): Promise<Array<TaskEntity>> {
    return this.taskRepository.findMany().then(tasks => {
      return tasks.map(task => TaskEntity.toResponse(task));
    });
  }

  findOne(id: number): Promise<TaskEntity> {
    return this.taskRepository.findById(id).then(
      task => TaskEntity.toResponse(task)
    );
  }

  update(command: TaskUpdateCommand): Promise<TaskEntity> {
    const task = Task.create(command);
    return this.taskRepository.update(task.toDbModel()).then(
      task => TaskEntity.toResponse(task)
    );
  }

  remove(id: number): Promise<TaskEntity> {
    return this.taskRepository.remove(id).then(
      task => TaskEntity.toResponse(task)
    );
  }
}
