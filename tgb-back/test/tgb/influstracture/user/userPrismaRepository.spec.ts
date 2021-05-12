import { PrismaService } from "@/db/prisma.service";
import { UserPrismaRepository } from "@/tgb/influstructure/user/userPrismaRepository";
import { Role } from "@prisma/client";


describe('UserPrismaRepository', () => {

  it('user create', async () => {
    const prismaServiceMock = new PrismaService();
    const userRep = new UserPrismaRepository(prismaServiceMock);
    const user = {
      id: 1,
      email: "test@example.com",
      password: "password",
      name: "name",
      role: "USER" as Role
    }
    $prisma.user.create.mockResolvedValue(user);
    await expect(userRep.save(user)).resolves.toEqual({
      id: 1,
      email: "test@example.com",
      password: "password",
      name: "name",
      role: "USER"
    })
  })

})
