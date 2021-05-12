import { User } from ".prisma/client";
import { UserModel } from "./user/userModel";

export interface Repository<T> {
  findById(): Promise<T>;
  find(): Promise<T>;
  findMany(): Promise<T[]>;

}

export interface TaskRepository extends Repository<TaskModel> {
  save(user: TaskModel): void;
  remove(user: TaskModel): void;
}

export interface UserRepository extends Repository<UserModel> {
  save(user: UserModel): Promise<User>;
  remove(user: UserModel): void;
}
