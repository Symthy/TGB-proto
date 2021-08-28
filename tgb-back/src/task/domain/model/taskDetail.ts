import { RequiredTime } from "./value/requiredTime";
import { ReviewPoints } from "./value/reviewPoints";
import { StepCount } from "./value/stepCount";
import { TaskContent } from "./value/taskContent";


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
