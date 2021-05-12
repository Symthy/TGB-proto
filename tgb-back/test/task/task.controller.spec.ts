import { TaskController } from '@/task/task.controller';
import { TaskService } from '@/task/task.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('TaskController', () => {
  let controller: TaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskService],  // ここに入れないとテスト失敗。コンストラクタで使ってるから？
      controllers: [TaskController],
    }).compile();

    controller = await module.resolve(TaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
