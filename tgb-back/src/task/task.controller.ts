import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TaskCreateCommand } from './command/taskCreate.command';
import { TaskUpdateCommand } from './command/taskUpdate.command';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskEntity } from './entities/task.entity';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    const command = new TaskCreateCommand(createTaskDto);
    return this.taskService.create(command);
  }

  @Get()
  findAll(): Promise<Array<TaskEntity>> {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<TaskEntity> {
    return this.taskService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto): Promise<TaskEntity> {
    const command = new TaskUpdateCommand(+id, updateTaskDto);
    return this.taskService.update(command);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<TaskEntity> {
    return this.taskService.remove(+id);
  }
}
