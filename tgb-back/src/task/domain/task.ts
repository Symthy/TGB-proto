import { TaskCreateCommand } from "@/task/command/taskCreate.command";
import { TaskModel } from "@/task/repository/taskModel";
import { WorkStatusValue } from "@/tgb/workStatus";
import { Progress } from "./model/progress";
import { RequiredTime } from "./model/requiredTime";
import { Status } from "./model/status";
import { TaskTitle } from "./model/taskTitle";
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

  static create(command: TaskCreateCommand) {
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
