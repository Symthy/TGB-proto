import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTaskGroupDto } from './dto/create-task-group.dto';
import { UpdateTaskGroupDto } from './dto/update-task-group.dto';
import { TaskGroupEntity } from './entities/task-group.entity';
import { TaskGroupService } from './task-group.service';

@Controller('task-group')
export class TaskGroupController {
  constructor(private readonly taskGroupService: TaskGroupService) { }

  @Post()
  create(@Body() createTaskGroupDto: CreateTaskGroupDto) {
    return this.taskGroupService.create(createTaskGroupDto);
  }

  @Get()
  findAll(): Promise<TaskGroupEntity[]> {
    return this.taskGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskGroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskGroupDto: UpdateTaskGroupDto) {
    return this.taskGroupService.update(+id, updateTaskGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskGroupService.remove(+id);
  }
}
