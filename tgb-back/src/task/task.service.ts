import { Task } from '@/tgb/domain/model/task';
import { TaskRepository } from '@/tgb/influstructure/repository';
import { Inject, Injectable } from '@nestjs/common';
import { TaskCreateCommand } from './command/taskCreate.command';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskEntity } from './entities/task.entity';

@Injectable()
export class TaskService {

  constructor(@Inject('TASK_REPOSITORY') private taskRepository: TaskRepository) {
  }

  create(command: TaskCreateCommand): Promise<TaskEntity> {
    const task = Task.toDomain(command);
    return this.taskRepository.create(task.toModel()).then(
      task => TaskEntity.toResponse(task)
    );
  }

  findAll() {
    return `This action returns all task`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
