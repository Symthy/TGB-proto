import { TimeList } from "../timeList";
import { WorkState } from "../workStatus";

export class Task {

  constructor(
    private id: number,
    private title: string,
    private progressPercent: number,
    private estimateTime: TimeList,
    private status: WorkState,
    private createdDateTime: Date,
    private content?: string,
    private resultTime?: TimeList,
    private stepCount?: number,
    private codeReviewPoints?: number
  ) {
  }

  
}
