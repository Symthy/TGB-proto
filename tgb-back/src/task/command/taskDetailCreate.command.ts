import { SelectTime } from "@/tgb/timeList";
import { CreateTaskDetailDto } from "../dto/create-taskDetail.dto";

export class TaskDetailCreateCommand {
  private _taskId: number;
  private _content?: string;
  private _resultTime?: SelectTime;
  private _stepCount?: number;
  private _codeReviewPoints?: number;

  constructor(task: CreateTaskDetailDto) {
    this._taskId = task.taskId;
    this._content = task.content;
    this._resultTime = task.stepCount;
    this._stepCount = task.stepCount;
    this._codeReviewPoints = task.codeReviewPoints;
  }

  get taskId(): number {
    return this._taskId;
  }

  get content(): string {
    return this._content;
  }

  get resultTime(): SelectTime {
    return this._resultTime;
  }

  get stepCount(): number {
    return this._stepCount;
  }

  get codeReviewPoints(): number {
    return this._codeReviewPoints;
  }
}
