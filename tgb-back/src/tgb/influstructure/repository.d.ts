import { TaskModel } from "./task/taskModel";
import { UserModel } from "./user/userModel";

export interface Repository<T> {
  findById(id: number): Promise<T>;
  findMany(): Promise<T[]>;

}

export interface TaskRepository extends Repository<TaskModel> {
  create(task: Omit<TaskModel, 'id'>): Promise<TaskModel>;
  update(task: TaskModel): Promise<TaskModel>
  remove(task: number): Promise<TaskModel>;
}

export interface UserRepository extends Repository<UserModel> {
  create(user: Omit<UserModel, 'id'>): Promise<UserModel>;
  update(user: UserModel): Promise<UserModel>
  remove(id: number): Promise<UserModel>;
}
