import { TaskCreateCommand } from '@/task/command/taskCreate.command';
import { CreateTaskDto } from '@/task/dto/create-task.dto';
import { TaskPrismaRepository } from '@/task/repository/taskPrismaRepository';
import { TaskController } from '@/task/task.controller';
import { TaskService } from '@/task/task.service';
import { PrismaService } from '@/tgb/db/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';

jest.mock('@/task/repository/taskPrismaRepository')
const TaskRepositoryMock = TaskPrismaRepository as unknown as jest.Mock;

describe('TaskService', () => {
  const title = 'Test Title';
  const progress = 0;
  const scheduledTime = '-'
  const status = 'WAITING'
  const groupId = 1
  const taskResult1 = {
    id: 1,
    title: title,
    progress: progress,
    scheduledTime: scheduledTime,
    status: status,
    groupId: groupId,
  }

  let service: TaskService;
  beforeEach(async () => {
    TaskRepositoryMock.mockImplementation(() => {
      return {
        create: task => new Promise((resolve) => resolve(task)).then(() => taskResult1),
        findById: id => new Promise((resolve) => resolve(id)).then(() => taskResult1),
        findMany: () => new Promise<void>((resolve) => resolve()).then(() => [taskResult1]),
        update: task => new Promise((resolve) => resolve(task)).then(() => taskResult1),
        remove: id => new Promise((resolve) => resolve(id)).then(() => taskResult1)
      }
    });

    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [TaskService, {
        provide: 'TASK_REPOSITORY',
        useValue: new TaskPrismaRepository(new PrismaService())
      }],
    }).compile();

    service = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create', () => {
    const command = new TaskCreateCommand(
      new CreateTaskDto(title, progress, scheduledTime, 'Waiting', groupId)
    );
    expect(service.create(command)).resolves.toEqual({
      id: 1,
      title: title,
      progress: progress,
      scheduledTime: scheduledTime,
      status: 'Waiting',
      groupId: groupId,
      createdDateTime: undefined,
      updatedDateTime: undefined,
      completedDateTime: undefined
    })
  });
});
