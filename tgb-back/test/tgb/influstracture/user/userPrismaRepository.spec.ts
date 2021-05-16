import { PrismaService } from "@/tgb/db/prisma.service";
import { UserPrismaRepository } from "@/tgb/influstructure/user/userPrismaRepository";
import { Role } from "@prisma/client";


describe('UserPrismaRepository', () => {

  it('user create', async () => {
    const prismaServiceMock = new PrismaService();
    const userRep = new UserPrismaRepository(prismaServiceMock);
    const userResult = {
      id: 1,
      email: "test@example.com",
      password: "password",
      nickname: "name",
      role: "USER" as Role
    }
    $prisma.user.create.mockResolvedValue(userResult);

    await expect(userRep.create({
      email: "test@example.com",
      password: "password",
      nickname: "name",
      role: "USER" as Role
    })).resolves.toEqual(userResult)
  })

})
