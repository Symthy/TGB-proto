import { PrismaService } from '@/tgb/db/prisma.service';
import { Role } from '@/tgb/domain/model/user/role';
import { UserPrismaRepository } from '@/tgb/influstructure/user/userPrismaRepository';
import { UserCreateCommand } from '@/user/command/userCreate.command';
import { CreateUserDto } from '@/user/dto/create-user.dto';
import { UserService } from '@/user/user.service';
import { Test, TestingModule } from '@nestjs/testing';

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
    $prisma.user.create.mockResolvedValue(userResult1);
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

  it('findAll', () => {
    $prisma.user.findMany.mockResolvedValue([userResult1, userResult2]);
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
});
