import { PrismaService } from '@/tgb/db/prisma.service';
import { UserRepository } from '@/tgb/db/repository';
import { UserCreateCommand } from '@/user/command/userCreate.command';
import { UserUpdateCommand } from '@/user/command/userUpdate.command';
import { UserPrismaRepository } from '@/user/domain/repository/userPrismaRepository';
import { Role } from '@/user/domain/value/role';
import { CreateUserDto } from '@/user/dto/create-user.dto';
import { UserService } from '@/user/user.service';
import { Test, TestingModule } from '@nestjs/testing';

jest.mock('@/user/domain/repository/userPrismaRepository')
const UserRepositoryMock = UserPrismaRepository as unknown as jest.Mock<UserRepository>;

describe('UserService', () => {
  const password = 'password123'
  const nickname = 'nickname';
  const email = 'test@example.com';
  const userResult1 = {
    id: 1,
    email: email,
    password: password,
    nickname: nickname,
    role: "USER" as Role
  }
  const password2 = 'password456';
  const nickname2 = 'nickname2';
  const email2 = 'test2@example.com';
  const userResult2 = {
    id: 2,
    email: email2,
    password: password2,
    nickname: nickname2,
    role: 'USER' as Role
  }

  let service: UserService;
  beforeEach(async () => {
    UserRepositoryMock.mockImplementationOnce(() => {
      return {
        create: user => new Promise((resolve) => resolve(user)).then(() => userResult1),
        findById: id => new Promise((resolve) => resolve(id)).then(() => userResult1),
        findAll: () => new Promise<void>((resolve) => resolve()).then(() => [userResult1, userResult2]),
        update: user => new Promise((resolve) => resolve(user)).then(() => userResult1),
        remove: id => new Promise((resolve) => resolve(id)).then(() => userResult1)
      }
    });

    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, {
        provide: 'USER_REPOSITORY',
        useValue: new UserPrismaRepository(new PrismaService()),
      }],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create', () => {
    const command = new UserCreateCommand(
      new CreateUserDto(password, password, nickname, email)
    );
    expect(service.create(command)).resolves.toEqual({
      id: 1,
      email: email,
      nickname: nickname,
      role: "USER"
    });
  });

  it('findById', () => {
    expect(service.findById(1)).resolves.toEqual({
      id: 1,
      email: email,
      nickname: nickname,
      role: "USER"
    });
  })

  it('findAll', () => {
    expect(service.findAll()).resolves.toMatchObject([
      {
        id: 1,
        email: email,
        nickname: nickname,
        role: 'USER'
      },
      {
        id: 2,
        email: email2,
        nickname: nickname2,
        role: 'USER'
      }
    ]);
  });

  it('update', () => {
    const command = new UserUpdateCommand(
      1,
      {
        password: password,
        retryPassword: password,
        nickname: nickname,
        email: email,
      }
    );
    expect(service.update(command)).resolves.toEqual({
      id: 1,
      email: email,
      nickname: nickname,
      role: "USER"
    });
  })

  it('remove', () => {
    expect(service.remove(1)).resolves.toEqual({
      id: 1,
      email: email,
      nickname: nickname,
      role: "USER"
    });
  })

});
