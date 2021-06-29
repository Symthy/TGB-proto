import { WorkState } from "@/tgb/workStatus";

class TaskCreateCommand {

  constructor(
    private _title: string,
    private _progressPercent: number,
    private _estimateTime: string,
    private _status: WorkState,
  ) {
  }
}
