import { PrismaService } from '@/tgb/db/prisma.service';
import { UserPrismaRepository } from '@/tgb/influstructure/user/userPrismaRepository';
import { UserController } from '@/user/user.controller';
import { UserService } from '@/user/user.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, {
        provide: 'USER_REPOSITORY',
        useValue: new UserPrismaRepository(new PrismaService()),
      }],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
