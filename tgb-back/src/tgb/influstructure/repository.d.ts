import { User } from ".prisma/client";
import { Task } from "@prisma/client";
import { UserModel } from "./user/userModel";

export interface Repository<T> {
  findById(id: number): Promise<T>;
  findMany(): Promise<T[]>;

}

export interface TaskRepository extends Repository<TaskModel> {
  create(task: Omit<TaskModel, 'id'>): Promise<Task>;
  update(task: TaskModel): Promise<Task>
  remove(task: TaskModel): Promise<Task>;
}

export interface UserRepository extends Repository<UserModel> {
  create(user: Omit<UserModel, 'id'>): Promise<User>;
  update(user: UserModel): Promise<User>
  remove(user: UserModel): Promise<User>;
}
