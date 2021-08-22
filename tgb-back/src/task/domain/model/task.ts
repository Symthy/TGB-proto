import { TaskCreateCommand } from "@/task/command/taskCreate.command";
import { TaskModel } from "@/task/domain/repository/taskModel";
import { WorkStatusValue } from "@/tgb/workStatus";
import { TaskUpdateCommand } from "../../command/taskUpdate.command";
import { TaskDetail } from "./taskDetail";
import { Progress } from "./value/progress";
import { RequiredTime } from "./value/requiredTime";
import { Status } from "./value/status";
import { TaskTitle } from "./value/taskTitle";

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

  static create(command: TaskCreateCommand | TaskUpdateCommand): Task {
    if (command instanceof TaskCreateCommand) {
      return new Task(
        new TaskTitle(command.title),
        new Progress(command.progressPercent),
        new RequiredTime(command.scheduledTime),
        new Status(command.status),
        command.groupId
      );
    }
    if (command instanceof TaskUpdateCommand) {
      return new Task(
        new TaskTitle(command.title),
        new Progress(command.progressPercent),
        new RequiredTime(command.scheduledTime),
        new Status(command.status),
        command.groupId,
      );
    }
    throw new Error(); // TODO
  }

  toDbModel(): TaskModel {
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
