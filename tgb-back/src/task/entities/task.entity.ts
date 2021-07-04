
import { ValueNullException } from "@/exception/valueNullException";
import { TaskModel } from "@/tgb/influstructure/task/taskModel";
import { SelectTime } from "@/tgb/timeList";
import { WorkState } from "@/tgb/workStatus";

export class TaskEntity {

  constructor(
    private id: number,
    private title: string,
    private progressPercent: number,
    private scheduledTime: SelectTime,
    private status: WorkState,
    private groupId: number,
    private createdDateTime: Date,
    private updatedDateTime?: Date,
    private completedDateTime?: Date,
  ) { }

  static toResponse(task: TaskModel) {
    if (task.id == null) throw new ValueNullException("id");
    return new TaskEntity(
      task.id,
      task.title,
      task.progress,
      task.scheduledTime as SelectTime,
      task.status as WorkState,
      task.groupId,
      task.createdAt,
    );
  }
}
