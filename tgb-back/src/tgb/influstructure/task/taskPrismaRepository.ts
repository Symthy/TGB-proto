import { DbContext, DbContextProvider } from "@/tgb/db/dbContext";
import { TaskRepository } from "../repository";
import { TaskModel } from "./taskModel";

export class TaskPrismaRepository implements TaskRepository {
  private prisma: DbContext;
  constructor(dbContextProvider: DbContextProvider) {
    this.prisma = dbContextProvider.getContext();
  }

  findById(id: number): Promise<TaskModel> {
    throw new Error("Method not implemented.");
  }

  findMany(): Promise<TaskModel[]> {
    throw new Error("Method not implemented.");
  }

  async create(task: Omit<TaskModel, 'id'>): Promise<TaskModel> {
    return await this.prisma.task.create({
      data: task
    });
  }

  async update(task: TaskModel): Promise<TaskModel> {
    return await this.prisma.task.update({
      data: task,
      where: { id: task.id }
    });
  }

  async remove(id: number): Promise<TaskModel> {
    return await this.prisma.task.delete({
      where: { id: id }
    });
  }

  getNextId(): Promise<number> {
    return this.prisma.user.aggregate({
      max: { id: true }
    }).then(data => data.max.id + 1);
  }
}
