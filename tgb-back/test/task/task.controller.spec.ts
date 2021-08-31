import { TaskQueryService } from '@/task/domain/query/taskQueryService';
import { TaskPrismaRepository } from '@/task/domain/repository/taskPrismaRepository';
import { TaskController } from '@/task/task.controller';
import { TaskService } from '@/task/task.service';
import { TaskInGroupService } from '@/task/taskInGroup.service';
import { PrismaService } from '@/tgb/db/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('TaskController', () => {
  let controller: TaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [TaskService, TaskInGroupService,
        {
          provide: 'TASK_REPOSITORY',
          useValue: new TaskPrismaRepository(new PrismaService())
        }, {
          provide: 'TASK_QUERY_REPOSITORY',
          useValue: new TaskQueryService(new PrismaService())
        }],
    }).compile();

    controller = module.get<TaskController>(TaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
