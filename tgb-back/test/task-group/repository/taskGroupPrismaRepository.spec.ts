import { TaskGroupPrismaRepository } from "@/task-group/domain/repository/taskGroupPrismaRepository";
import { PrismaService } from "@/tgb/db/prisma.service";


describe('TaskPrismaRepository', () => {
  const prismaServiceMock = new PrismaService();
  const taskGroupRep = new TaskGroupPrismaRepository(prismaServiceMock);

  const tgResult1 = {
    id: 0,
    name: 'default',
    summary: 'default group',
  }
  const tgResult2 = {
    id: 2,
    name: "group 1",
    summary: 'test group 1'
  }

  it('task group find all', async () => {
    $prisma.taskGroup.findMany.mockResolvedValue([tgResult1, tgResult2]);
    expect(taskGroupRep.findMany()).resolves.toMatchObject(
      [tgResult1, tgResult2]
    );
  });

});
