import { TaskPrismaRepository } from "@/task/domain/repository/taskPrismaRepository";
import { PrismaService } from "@/tgb/db/prisma.service";
import { Status, Task } from "@prisma/client";

describe('TaskPrismaRepository', () => {
  const prismaServiceMock = new PrismaService();
  const taskRep = new TaskPrismaRepository(prismaServiceMock);

  const taskResult1: Task = {
    id: 1,
    title: "task title",
    progress: 0,
    status: 'WAITING' as Status,
    content: 'detail1',
    scheduledTime: '-',
    resultTime: '-',
    stepCount: 0,
    reviewPoints: 0,
    groupId: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    completedAt: new Date()
  }

  const taskResult2: Task = {
    id: 2,
    title: "task title2",
    progress: 30,
    status: 'INPROGRESS' as Status,
    scheduledTime: '1d',
    content: 'detail2',
    resultTime: '-',
    stepCount: 50,
    reviewPoints: 0,
    groupId: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    completedAt: null
  };

  it('task find one', async () => {
    $prisma.task.findUnique.mockResolvedValue(taskResult2);
    expect(taskRep.findById(1)).resolves.toEqual(taskResult2);
  });

  it('task find all', async () => {
    $prisma.task.findMany.mockResolvedValue([taskResult1, taskResult2]);
    expect(taskRep.findMany()).resolves.toMatchObject(
      [taskResult1, taskResult2]
    );
  });

  it('create task', async () => {
    $prisma.task.create.mockResolvedValue(taskResult1);
    await expect(taskRep.create({
      title: "task title",
      progress: 0,
      scheduledTime: '-',
      status: 'WAITING',
      groupId: 0
    })).resolves.toEqual(taskResult1);
  });

  it('update task', async () => {
    $prisma.task.update.mockResolvedValue(taskResult2);
    await expect(taskRep.update({
      id: 1,
      title: "task title",
      progress: 50,
      status: 'INPROGRESS' as Status,
      content: 'detail',
      scheduledTime: '1d',
      resultTime: '-',
      stepCount: 0,
      reviewPoints: 0,
      groupId: 0,
    })).resolves.toEqual(taskResult2);
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
