import { PrismaService } from "@/tgb/db/prisma.service";
import { TaskPrismaRepository } from "@/tgb/influstructure/task/taskPrismaRepository";
import { Status } from "@prisma/client";

describe('UserPrismaRepository', () => {
  const prismaServiceMock = new PrismaService();
  const taskRep = new TaskPrismaRepository(prismaServiceMock);

  const taskResult1 = {
    id: 1,
    title: "task title",
    progress: 0,
    scheduledTime: '-',
    status: 'WAITING' as Status,
    content: '',
    resultTime: '-',
    stepCount: 0,
    reviewPoints: 0,
    groupId: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    completedAt: null
  }

  it('create task', async () => {
    $prisma.task.create.mockResolvedValue(taskResult1);
    await expect(taskRep.create({
      title: "task title",
      progress: 0,
      scheduledTime: '-',
      status: 'WAITING' as Status,
      groupId: 0
    })).resolves.toEqual(taskResult1);
  });

})
