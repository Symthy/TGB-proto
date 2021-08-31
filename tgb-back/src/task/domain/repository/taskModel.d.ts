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
  startedAt?: Date;
  completedAt?: Date;
  groupId: number;
  assignUserId?: number;
}
