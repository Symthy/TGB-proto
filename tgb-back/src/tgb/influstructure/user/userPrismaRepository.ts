import { PrismaService } from "@/prisma.service";
import { UserRepository } from "../repository";

export class UserPrismaRepository implements UserRepository {
  constructor(private dbContext: PrismaService) { }

  findById(): Promise<UserModel> {
    throw new Error("Method not implemented.");
  }
  find(): Promise<UserModel> {
    throw new Error("Method not implemented.");
  }
  findMany(): Promise<UserModel[]> {
    throw new Error("Method not implemented.");
  }
  save(): void {
    throw new Error("Method not implemented.");
  }
  remove(): void {
    throw new Error("Method not implemented.");
  }

}
