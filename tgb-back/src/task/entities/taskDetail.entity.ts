import { TimeList } from "@/tgb/timeList";

export class TaskDetail {

  constructor(
    private taskId: number,
    private content?: string,
    private resultTime?: TimeList,
    private stepCount?: number,
    private codeReviewPoints?: number) { }
}
