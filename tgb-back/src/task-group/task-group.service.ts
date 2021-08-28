import { TaskGroupRepository } from '@/tgb/db/repository';
import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskGroupDto } from './dto/create-task-group.dto';
import { UpdateTaskGroupDto } from './dto/update-task-group.dto';
import { TaskGroupEntity } from './entities/task-group.entity';

@Injectable()
export class TaskGroupService {

  constructor(@Inject('TASK_GROUP_REPOSITORY') private taskGroupRepository: TaskGroupRepository) {
  }

  create(createTaskGroupDto: CreateTaskGroupDto) {
    return 'This action adds a new taskGroup';
  }

  findAll(): Promise<TaskGroupEntity[]> {
    return this.taskGroupRepository.findAll().then(
      taskGroups => taskGroups.map(tg => TaskGroupEntity.toResponse(tg))
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} taskGroup`;
  }

  update(id: number, updateTaskGroupDto: UpdateTaskGroupDto) {
    return `This action updates a #${id} taskGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} taskGroup`;
  }
}
