import { Test, TestingModule } from '@nestjs/testing';
import { TaskGroupService } from '../../src/task-group/task-group.service';

describe('TaskGroupService', () => {
  let service: TaskGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskGroupService],
    }).compile();

    service = module.get<TaskGroupService>(TaskGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
