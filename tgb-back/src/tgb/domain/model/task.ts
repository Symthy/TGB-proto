import { TaskCreateCommand } from "@/task/command/taskCreate.command";
import { TaskModel } from "@/tgb/influstructure/task/taskModel";
import { WorkStatusValue } from "@/tgb/workStatus";
import { Progress } from "../model/task/progress";
import { RequiredTime } from "../model/task/requiredTime";
import { Status } from "../model/task/status";
import { TaskTitle } from "../model/task/taskTitle";
import { TaskDetail } from "./taskDetail";

export class Task {

  constructor(
    private title: TaskTitle,
    private progressPercent: Progress,
    private scheduledTime: RequiredTime,
    private status: Status,
    private groupId: number,
    private id?: number,
    private createdDateTime?: Date,
    private updatedDateTime?: Date,
    private completedDateTime?: Date,
    private taskDetail?: TaskDetail
  ) {
  }

  // Todo: Builder
  static toDomain(command: TaskCreateCommand) {
    return new Task(
      new TaskTitle(command.title),
      new Progress(command.progressPercent),
      new RequiredTime(command.scheduledTime),
      new Status(command.status),
      command.groupId
    );
  }

  toModel(): TaskModel {
    return {
      id: this.id,
      title: this.title.value,
      progress: this.progressPercent.value,
      scheduledTime: this.scheduledTime.value,
      status: WorkStatusValue.convert(this.status.value),
      groupId: this.groupId
    }
  }
}
