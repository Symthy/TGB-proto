import { SelectTime, SelectTimeValue } from "@/tgb/timeList";
import { WorkState, WorkStatusValue } from "@/tgb/workStatus";
import { CreateTaskDto } from "../dto/create-task.dto";

export class TaskCreateCommand {
  private _title: string;
  private _progressPercent: number;
  private _scheduledTime: SelectTime;
  private _status: WorkState
  private _groupId: number;

  constructor(task: CreateTaskDto) {
    this._title = task.title;
    this._progressPercent = task.progressPercent ?? 0;
    this._scheduledTime = task.estimateTime ?? SelectTimeValue.defaultTime();
    this._status = task.status ?? WorkStatusValue.default();
    this._groupId = task.groupId;
  }

  get title() {
    return this._title;
  }

  get progressPercent() {
    return this._progressPercent;
  }

  get scheduledTime() {
    return this._scheduledTime;
  }

  get status() {
    return this._status;
  }

  get groupId() {
    return this._groupId;
  }
}
