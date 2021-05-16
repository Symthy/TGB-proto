import { PrismaService } from '@/tgb/db/prisma.service';
import { Role } from '@/tgb/domain/model/user/role';
import { UserPrismaRepository } from '@/tgb/influstructure/user/userPrismaRepository';
import { CreateUserDto } from '@/user/dto/create-user.dto';
import { UserService } from '@/user/user.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('UserService', () => {
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

  it('create test', () => {
    const password = 'password123'
    const nickname = 'nickname';
    const email = 'test@example.com';
    const userResult = {
      id: 1,
      email: email,
      password: password,
      nickname: nickname,
      role: "USER" as Role
    }
    $prisma.user.create.mockResolvedValue(userResult);

    const userDto = new CreateUserDto(password, nickname, email);
    expect(service.create(userDto)).resolves.toEqual({
      id: 1,
      email: email,
      nickname: nickname,
      role: "USER"
    })
  })
});
