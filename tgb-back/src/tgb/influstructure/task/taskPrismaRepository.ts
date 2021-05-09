import { PrismaService } from "@/prisma.service";
import { TaskRepository } from "../repository";

export class TaskPrismaRepository implements TaskRepository {
  constructor(private prisma: PrismaService) { }

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
