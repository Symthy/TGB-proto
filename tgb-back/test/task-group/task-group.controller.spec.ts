import { TaskGroupPrismaRepository } from '@/task-group/domain/repository/taskGroupPrismaRepository';
import { TaskGroupController } from '@/task-group/task-group.controller';
import { TaskGroupService } from '@/task-group/task-group.service';
import { PrismaService } from '@/tgb/db/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';


describe('TaskGroupController', () => {
  let controller: TaskGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskGroupController],
      providers: [TaskGroupService, {
        provide: 'TASK_GROUP_REPOSITORY',
        useValue: new TaskGroupPrismaRepository(new PrismaService())
      }],
    }).compile();

    controller = module.get<TaskGroupController>(TaskGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
