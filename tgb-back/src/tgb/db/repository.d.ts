import { TaskGroupModel } from "@/task-group/domain/repository/taskGroupModel";
import { TaskModel } from "@/task/domain/repository/taskModel";
import { UserModel } from "@/user/domain/repository/userModel";

export interface BasicRepository<T> {
  findById(id: number): Promise<T>;
  findAll(): Promise<T[]>;
  create(task: Omit<T, 'id'>): Promise<T>;
  update(task: T): Promise<T>
  remove(id: number): Promise<T>;
}

export interface TaskRepository extends BasicRepository<TaskModel> {
}

export interface UserRepository extends BasicRepository<UserModel> {
}

export interface TaskGroupRepository extends BasicRepository<TaskGroupModel> {
}
