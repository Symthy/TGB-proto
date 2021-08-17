
import { ValueNullException } from "@/exception/valueNullException";
import { TaskModel } from "@/task/repository/taskModel";
import { SelectTime } from "@/tgb/timeList";
import { WorkState, WorkStatusValue } from "@/tgb/workStatus";

export class TaskEntity {
  private id: number;
  private title: string;
  private progress: number;
  private scheduledTime: string;
  private status: string;
  private groupId: number;
  private createdDateTime: Date;
  private updatedDateTime: Date;
  private completedDateTime: Date;

  constructor(builder: TaskEntityBuilder) {
    this.id = builder.id
    this.title = builder.title;
    this.progress = builder.progress;
    this.scheduledTime = builder.scheduledTime;
    this.status = builder.status;
    this.groupId = builder.groupId;
    this.createdDateTime = builder.createdDateTime;
    this.updatedDateTime = builder.updatedDateTime;
    this.completedDateTime = builder.completedDateTime
  }

  static toResponse(task: TaskModel): TaskEntity {
    if (task.id == null) throw new ValueNullException("id");
    return new TaskEntity(
      new TaskEntityBuilder()
        .withId(task.id)
        .withTitle(task.title)
        .withProgress(task.progress)
        .withScheduledTime(task.scheduledTime as SelectTime)
        .withStatus(WorkStatusValue.reconvert(task.status))
        .withGroupId(task.groupId)
        .withCreatedDateTime(task.createdAt)
        .withUpdatedDateTime(task.updatedAt)
        .withCompletedDateTime(task.completedAt)
    );
  }
}

interface ITaskEntity {
  id: number,
  title: string,
  progress: number,
  scheduledTime: SelectTime,
  status: WorkState,
  groupId: number,
  createdDateTime: Date,
  updatedDateTime?: Date,
  completedDateTime?: Date,
}

export class TaskEntityBuilder implements Partial<ITaskEntity> {
  id?: number;
  title?: string;
  progress?: number;
  scheduledTime?: SelectTime;
  status?: WorkState;
  groupId?: number;
  createdDateTime?: Date;
  updatedDateTime?: Date;
  completedDateTime?: Date;
  withId(value: number): this & Pick<ITaskEntity, 'id'> {
    return Object.assign(this, { id: value });
  }
  withTitle(value: string): this & Pick<ITaskEntity, 'title'> {
    return Object.assign(this, { title: value });
  }
  withProgress(value: number): this & Pick<ITaskEntity, 'progress'> {
    return Object.assign(this, { progress: value });
  }
  withScheduledTime(value: SelectTime): this & Pick<ITaskEntity, 'scheduledTime'> {
    return Object.assign(this, { scheduledTime: value });
  }
  withStatus(value: WorkState): this & Pick<ITaskEntity, 'status'> {
    return Object.assign(this, { status: value });
  }
  withGroupId(value: number): this & Pick<ITaskEntity, 'groupId'> {
    return Object.assign(this, { groupId: value });
  }
  withCreatedDateTime(value: Date): this & Pick<ITaskEntity, 'createdDateTime'> {
    return Object.assign(this, { createdDateTime: value });
  }
  withUpdatedDateTime(value: Date): this & Pick<ITaskEntity, 'updatedDateTime'> {
    return Object.assign(this, { updatedDateTime: value });
  }
  withCompletedDateTime(value: Date): this & Pick<ITaskEntity, 'completedDateTime'> {
    return Object.assign(this, { completedDateTime: value });
  }
  build(this: TaskEntityBuilder) {
    return new TaskEntity(this);
  }
}
