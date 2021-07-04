import { RequiredTime } from "./model/task/requiredTime";
import { ReviewPoints } from "./model/task/reviewPoints";
import { StepCount } from "./model/task/stepCount";
import { TaskContent } from "./model/task/taskContent";

export class TaskDetail {
  constructor(
    private id: number,
    private content?: TaskContent,
    private resultTime?: RequiredTime,
    private stepCount?: StepCount,
    private reviewPoints?: ReviewPoints,
  ) {
  }
}
