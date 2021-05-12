import { User } from ".prisma/client";
import { DbContext, DbContextProvider } from "@/db/dbContext";
import { UserRepository } from "../repository";
import { UserModel } from "./userModel";

export class UserPrismaRepository implements UserRepository {
  private prisma: DbContext;
  constructor(private dbContextProvider: DbContextProvider) {
    this.prisma = dbContextProvider.getContext();
  }

  findById(): Promise<UserModel> {
    throw new Error("Method not implemented.");
  }
  find(): Promise<UserModel> {
    throw new Error("Method not implemented.");
  }
  findMany(): Promise<UserModel[]> {
    throw new Error("Method not implemented.");
  }
  async save(user: UserModel): Promise<User> {
    return await this.prisma.user.create({
      data: user
    });
  }
  remove(): void {
    throw new Error("Method not implemented.");
  }

}
