import { DbContext, DbContextProvider } from "@/tgb/db/dbContext";
import { TaskGroupRepository } from "@/tgb/db/repository";
import { TaskGroupModel } from "./taskGroupModel";

export class TaskGroupPrismaRepository implements TaskGroupRepository {
  private prisma: DbContext;
  constructor(dbContextProvider: DbContextProvider) {
    this.prisma = dbContextProvider.getContext();
  }

  create(taskGroup: Omit<TaskGroupModel, "id">): Promise<TaskGroupModel> {
    throw new Error("Method not implemented.");
  }
  update(taskGroup: TaskGroupModel): Promise<TaskGroupModel> {
    throw new Error("Method not implemented.");
  }
  remove(id: number): Promise<TaskGroupModel> {
    throw new Error("Method not implemented.");
  }
  findById(id: number): Promise<TaskGroupModel> {
    throw new Error("Method not implemented.");
  }
  async findAll(): Promise<TaskGroupModel[]> {
    return await this.prisma.taskGroup.findMany();
  }

}
