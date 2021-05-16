import { PrismaService } from '@/tgb/db/prisma.service';
import { UserPrismaRepository } from '@/tgb/influstructure/user/userPrismaRepository';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, {
    provide: 'USER_REPOSITORY',
    useValue: new UserPrismaRepository(new PrismaService()),
  }]
})
export class UserModule { }
