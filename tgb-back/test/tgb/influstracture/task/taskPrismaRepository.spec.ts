import { PrismaService } from "@/tgb/db/prisma.service";
import { TaskPrismaRepository } from "@/tgb/influstructure/task/taskPrismaRepository";
import { Status } from "@prisma/client";

describe('UserPrismaRepository', () => {
  const prismaServiceMock = new PrismaService();
  const taskRep = new TaskPrismaRepository(prismaServiceMock);

  it('create task', async () => {
    const taskCreateResult = {
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
    $prisma.task.create.mockResolvedValue(taskCreateResult);
    await expect(taskRep.create({
      title: "task title",
      progress: 0,
      scheduledTime: '-',
      status: 'WAITING' as Status,
      groupId: 0
    })).resolves.toEqual(taskCreateResult);
  });

  it('update task', async () => {
    const taskUpdateResult = {
      id: 1,
      title: "task title",
      progress: 50,
      scheduledTime: '1d',
      status: 'WAITING' as Status,
      content: 'detail',
      resultTime: '-',
      stepCount: 0,
      reviewPoints: 0,
      groupId: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      completedAt: null
    };
    $prisma.task.update.mockResolvedValue(taskUpdateResult);
    await expect(taskRep.update({
      id: 1,
      title: "task title",
      progress: 50,
      scheduledTime: '1d',
      status: 'WAITING' as Status,
      content: 'detail',
      resultTime: '-',
      stepCount: 0,
      reviewPoints: 0,
      groupId: 0,
    })).resolves.toEqual(taskUpdateResult);
  });

  it('task remove', async () => {
    const taskDeleteResult = {
      id: 1,
      title: "task title",
      progress: 50,
      scheduledTime: '2d',
      status: 'PENDING' as Status,
      content: 'remove',
      resultTime: '-',
      stepCount: 0,
      reviewPoints: 0,
      groupId: 0,
      createdAt: new Date('2021-06-01T00:00:00'),
      updatedAt: new Date('2021-06-02T00:00:00'),
      completedAt: null
    };
    $prisma.task.delete.mockResolvedValue(taskDeleteResult);
    await expect(taskRep.remove(1)).resolves.toEqual(taskDeleteResult);
  });
})
