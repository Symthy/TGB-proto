
export class TasksInGroupEntity {
  groupId: number;
  groupName: string;
  taskId: number;
  taskName: string;
  userName: string;
  scheduledTime: string;
  resultTime: string;
  stepCount: number;
  reviewPoints: number;
  startedDateTime: Date
  completedDateTime: Date;
}
