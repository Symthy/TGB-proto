import { Progress } from "./model/task/progress";
import { RequiredTime } from "./model/task/requiredTime";
import { Status } from "./model/task/status";
import { TaskTitle } from "./model/task/taskTitle";
import { TaskDetail } from "./taskDetail";

export class Task {

  constructor(
    private title: TaskTitle,
    private progressPercent: Progress,
    private scheduledTime: RequiredTime,
    private status: Status,
    private id?: number,
    private createdDateTime?: Date,
    private updatedDateTime?: Date,
    private completedDateTime?: Date,
    private taskDetail?: TaskDetail
  ) {
  }
}
