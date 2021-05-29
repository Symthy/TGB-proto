import { PrismaService } from "@/tgb/db/prisma.service";
import { UserPrismaRepository } from "@/tgb/influstructure/user/userPrismaRepository";
import { Role } from "@prisma/client";


describe('UserPrismaRepository', () => {
  const prismaServiceMock = new PrismaService();
  const userRep = new UserPrismaRepository(prismaServiceMock);

  const userResult1 = {
    id: 1,
    email: "test@example.com",
    password: "password",
    nickname: "name",
    role: "USER" as Role
  }
  const userResult2 = {
    id: 2,
    email: "test2@example.com",
    password: "password2",
    nickname: "name2",
    role: "USER" as Role
  }

  it('create user', async () => {
    $prisma.user.create.mockResolvedValue(userResult1);
    await expect(userRep.create({
      email: "test@example.com",
      password: "password",
      nickname: "name",
      role: "USER"
    })).resolves.toEqual(userResult1);
  });

  it('user fine one', async () => {
    $prisma.user.findUnique.mockResolvedValue(userResult1);
    expect(userRep.findById(1)).resolves.toEqual(userResult1);
  });

  it('user find all', async () => {
    $prisma.user.findMany.mockResolvedValue([userResult1, userResult2]);
    expect(userRep.findMany()).resolves.toMatchObject([
      userResult1, userResult2
    ]);
  });

  it('user update', async () => {
    const userResult = userResult1;
    userResult.nickname = 'changedName'
    $prisma.user.update.mockResolvedValue(userResult);
    await expect(userRep.update({
      id: 1,
      email: "test@example.com",
      password: "password",
      nickname: "changedName",
      role: "USER"
    })).resolves.toEqual(userResult);
  });
})
