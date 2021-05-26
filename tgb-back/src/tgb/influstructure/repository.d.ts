import { User } from ".prisma/client";
import { Task } from "@prisma/client";
import { UserModel } from "./user/userModel";

export interface Repository<T> {
  findById(): Promise<T>;
  find(): Promise<T>;
  findMany(): Promise<T[]>;

}

export interface TaskRepository extends Repository<TaskModel> {
  create(task: TaskModel): Promise<Task>;
  update(task: TaskModel): Promise<Task>
  remove(task: TaskModel): Promise<Task>;
}

export interface UserRepository extends Repository<UserModel> {
  create(user: UserModel): Promise<User>;
  update(task: UserModel): Promise<User>
  remove(user: UserModel): Promise<User>;
}
