import { User } from ".prisma/client";
import { DbContext, DbContextProvider } from "@/tgb/db/dbContext";
import { UserRepository } from "../repository";
import { UserModel } from "./userModel";

export class UserPrismaRepository implements UserRepository {
  private prisma: DbContext;
  constructor(private dbContextProvider: DbContextProvider) {
    this.prisma = dbContextProvider.getContext();
  }

  async findById(id: number): Promise<UserModel> {
    return await this.prisma.user.findUnique(
      { where: { id: id } }
    );
  }

  async findMany(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async create(user: Omit<UserModel, 'id'>): Promise<User> {
    return await this.prisma.user.create({
      data: user
    });
  }

  async update(user: UserModel): Promise<User> {
    return await this.prisma.user.update({
      data: user,
      where: { id: user.id }
    });
  }

  async remove(id: number): Promise<User> {
    return await this.prisma.user.delete({
      where: { id: id }
    });
  }

}
