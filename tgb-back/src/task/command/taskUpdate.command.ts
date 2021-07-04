import { WorkState } from "@/tgb/workStatus";

export class TaskUpdateCommand {
  private _id: number;
  private _title?: string;
  private _progressPercent?: number;
  private _estimateTime?: string;
  private _status?: WorkState;
  constructor(
  ) { }

}
