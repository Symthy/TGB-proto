import { SelectTime } from "@/tgb/timeList";
import { Status } from "@prisma/client";

interface TaskModel {
  id: number;
  title: string;
  progress: number;
  scheduledTime: string;
  status: Status;
  content?: string,
  resultTime?: string,
  stepCount?: number,
  reviewPoints?: number
  createdAt?: Date;
  updatedAt?: Date;
  completedAt?: Date;
  groupId: number;
}

interface TaskDetailModel {
  id: number
  content?: string,
  resultTime?: SelectTime,
  stepCount?: number,
  reviewPoints?: number
}
