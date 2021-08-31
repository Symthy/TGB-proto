import { DbContext, DbContextProvider } from "@/tgb/db/dbContext";
import { GroupBelongTasksDto } from "./groupBelongTasksDto";

export class TaskQueryService {
  private prisma: DbContext;
  constructor(dbContextProvider: DbContextProvider) {
    this.prisma = dbContextProvider.getContext();
  }

  async findByGroupId(groupId: number): Promise<GroupBelongTasksDto[]> {
    const tasks = await this.prisma.task.findMany(
      {
        where: { groupId: groupId },
        select: {
          id: true,
          title: true,
          stepCount: true,
          reviewPoints: true,
          scheduledTime: true,
          resultTime: true,
          startedAt: true,
          completedAt: true,
          groupId: true,
          assignUserId: true,
          taskGroup: {
            select: {
              name: true
            }
          },
          user: {
            select: {
              nickname: true
            }
          }
        }
      }
    );

    return tasks.map(t => {
      return {
        groupId: t.groupId,
        groupName: t.taskGroup.name,
        taskId: t.id,
        taskName: t.title,
        userName: t.user.nickname,
        scheduledTime: t.scheduledTime,
        resultTime: t.resultTime,
        stepCount: t.stepCount,
        reviewPoints: t.reviewPoints,
        startedDateTime: t.startedAt,
        completedDateTime: t.completedAt
      }
    });
  }
}
