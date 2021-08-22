import { ValueNullException } from "@/exception/valueNullException";
import { TaskGroupModel } from "../domain/repository/taskGroupModel";

export class TaskGroupEntity {
  private id: number;
  private name: string;
  private summary: string;

  private constructor(id: number, name: string, summary: string) { }

  static toResponse(taskGroup: TaskGroupModel): TaskGroupEntity {
    if (taskGroup.id == null) throw new ValueNullException("id");
    return new TaskGroupEntity(
      taskGroup.id,
      taskGroup.name,
      taskGroup.summary
    );
  }
}
