import { PrismaService } from "@/db/prisma.service";
import { UserPrismaRepository } from "@/tgb/influstructure/user/userPrismaRepository";
import { Role } from "@prisma/client";


describe('UserPrismaRepository Test', () => {

  it('user create', async () => {
    const prismaServiceMock = new PrismaService();
    const userRep = new UserPrismaRepository(prismaServiceMock);
    const userResult = {
      id: 1,
      email: "test@example.com",
      password: "password",
      name: "name",
      role: "USER" as Role
    }
    $prisma.user.create.mockResolvedValue(userResult);

    await expect(userRep.create({
      email: "test@example.com",
      password: "password",
      name: "name",
      role: "USER" as Role
    })).resolves.toEqual(userResult)
  })

})
