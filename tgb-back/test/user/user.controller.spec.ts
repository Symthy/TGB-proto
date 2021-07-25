import { PrismaService } from '@/tgb/db/prisma.service';
import { UserPrismaRepository } from '@/tgb/influstructure/user/userPrismaRepository';
import { CreateUserDto } from '@/user/dto/create-user.dto';
import { UserController } from '@/user/user.controller';
import { UserService } from '@/user/user.service';
import { Test, TestingModule } from '@nestjs/testing';
import { Role } from '@prisma/client';

jest.mock('@/user/user.service')
const UserServiceMock = UserService as jest.Mock;

describe('UserController', () => {
  const password = 'password123'
  const nickname = 'nickname';
  const email = 'test@example.com';
  const userResult1 = {
    id: 1,
    email: email,
    nickname: nickname,
    role: "USER" as Role
  }
  const nickname2 = 'nickname2';
  const email2 = 'test2@example.com';
  const userResult2 = {
    id: 2,
    email: email2,
    nickname: nickname2,
    role: 'USER' as Role
  }

  let controller: UserController;
  beforeEach(async () => {
    UserServiceMock.mockImplementationOnce(() => {
      return {
        create: command => new Promise((resolve) => resolve(command)).then(() => userResult1),
        findById: id => new Promise((resolve) => resolve(id)).then(() => userResult1),
        findAll: () => new Promise<void>((resolve) => resolve()).then(() => [userResult1, userResult2]),
        update: command => new Promise((resolve) => resolve(command)).then(() => userResult1),
        remove: id => new Promise((resolve) => resolve(id)).then(() => userResult1)
      }
    });

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

  it('create: retry password valid', () => {
    const createUserDto = new CreateUserDto(password, password, nickname, email);
    expect(controller.create(createUserDto)).resolves.toEqual({
      id: 1,
      email: email,
      nickname: nickname,
      role: "USER"
    });
  });

  it('create: retry password invalid', () => {
    const createUserDto = new CreateUserDto(password, "noMatchPassword", nickname, email);
    expect(() => { controller.create(createUserDto) }).toThrowError(Error);
  });

});
