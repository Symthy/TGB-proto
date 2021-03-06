import { SelectTime } from "@/tgb/timeList";

export class TaskDetailEntity {

  constructor(
    private taskId: number,
    private content?: string,
    private resultTime?: SelectTime,
    private stepCount?: number,
    private codeReviewPoints?: number) { }
}
