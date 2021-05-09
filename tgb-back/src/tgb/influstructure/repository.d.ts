
export interface Repository<T> {
  findById(): Promise<T>;
  find(): Promise<T>;
  findMany(): Promise<T[]>;
  save(): void;
  remove(): void;
}

export interface TaskRepository extends Repository<TaskModel> {

}

export interface UserRepository extends Repository<UserModel> {

}
