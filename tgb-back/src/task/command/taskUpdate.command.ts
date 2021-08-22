import { SelectTimeValue } from "@/tgb/timeList";
import { WorkState, WorkStatusValue } from "@/tgb/workStatus";
import { UpdateTaskDto } from "../dto/update-task.dto";

export class TaskUpdateCommand {
  private _id: number;
  private _groupId: number;
  private _title?: string;
  private _progressPercent?: number;
  private _scheduledTime?: string;
  private _status?: WorkState;

  constructor(id: number, task: UpdateTaskDto) {
    this._id = id;
    this._groupId = task.groupId;
    this._title = task.title;
    this._progressPercent = task.progressPercent ?? 0;
    this._scheduledTime = task.scheduledTime ?? SelectTimeValue.defaultTime();
    this._status = task.status ?? WorkStatusValue.default();
  }

  get id() {
    return this._id;
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
