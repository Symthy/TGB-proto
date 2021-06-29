import { TimeList } from "@/tgb/timeList";
import { WorkState } from "@/tgb/workStatus";
import { TaskDetail } from "./taskDetail.entity";

export class Task {

  constructor(
    private id: number,
    private title: string,
    private progressPercent: number,
    private estimateTime: TimeList,
    private status: WorkState,
    private createdDateTime: Date,
    private updatedDateTime?: Date,
    private completedDateTime?: Date,
    private taskDetail?: TaskDetail
  ) { }
}
