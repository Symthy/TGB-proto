import { DbContext, DbContextProvider } from "@/db/dbContext";
import { TaskRepository } from "../repository";

export class TaskPrismaRepository implements TaskRepository {
  private prisma: DbContext;
  constructor(dbContextProvider: DbContextProvider) {
    this.prisma = dbContextProvider.getContext();
  }

  findById(): Promise<TaskModel> {
    throw new Error("Method not implemented.");
  }
  find(): Promise<TaskModel> {
    throw new Error("Method not implemented.");
  }
  findMany(): Promise<TaskModel[]> {
    throw new Error("Method not implemented.");
  }
  save(): void {
    throw new Error("Method not implemented.");
  }
  remove(): void {
    throw new Error("Method not implemented.");
  }

  getNextId(): Promise<number> {
    return this.prisma.user.aggregate({
      max: { id: true }
    }).then(data => data.max.id + 1);
  }
}
