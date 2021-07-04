import { SelectTime } from "@/tgb/timeList";
import { WorkState } from "@/tgb/workStatus";

interface TaskModel {
  id: number;
  title: string;
  progressPercent: number;
  estimateTime: SelectTime;
  status: WorkState;
  createdAt: Date;
  updatedAt: Date;
  completedAt: Date;
  groupId: number;
}

interface TaskDetailModel {
  id: number
  content?: string,
  resultTime?: SelectTime,
  stepCount?: number,
  codeReviewPoints?: number
}
