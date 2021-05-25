import { User } from ".prisma/client";
import { DbContext, DbContextProvider } from "@/tgb/db/dbContext";
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
  async findMany(): Promise<User[] | void> {
    return await this.prisma.user.findMany().catch(e => console.log(e));
  }
  async create(user: Omit<UserModel, 'id'>): Promise<User> {
    return await this.prisma.user.create({
      data: user
    });
  }
  update(user: UserModel): Promise<User> {
    throw new Error("Method not implemented.");
  }
  remove(): Promise<User> {
    throw new Error("Method not implemented.");
  }

}
