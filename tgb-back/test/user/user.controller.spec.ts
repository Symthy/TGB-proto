import { PrismaService } from '@/tgb/db/prisma.service';
import { UserPrismaRepository } from '@/tgb/influstructure/user/userPrismaRepository';
import { CreateUserDto } from '@/user/dto/create-user.dto';
import { UserController } from '@/user/user.controller';
import { UserService } from '@/user/user.service';
import { Test, TestingModule } from '@nestjs/testing';
import { Role } from '@prisma/client';

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

  const password = 'password123'
  const nickname = 'nickname';
  const email = 'test@example.com';

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('retry password valid', () => {
    const userResult = {
      id: 1,
      email: email,
      password: password,
      nickname: nickname,
      role: "USER" as Role
    }
    $prisma.user.create.mockResolvedValue(userResult);

    const createUserDto = new CreateUserDto(password, password, nickname, email)
    expect(controller.create(createUserDto)).resolves.toEqual({
      id: 1,
      email: email,
      nickname: nickname,
      role: "USER"
    });
  });

  it('retry password invalid', () => {
    const createUserDto = new CreateUserDto(password, "noMatchPassword", nickname, email)
    expect(() => { controller.create(createUserDto) }).toThrowError(Error);
  });
});
