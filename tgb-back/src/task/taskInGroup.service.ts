import { Inject } from "@nestjs/common";
import { GroupBelongTasksDto } from "./domain/query/groupBelongTasksDto";
import { TaskQueryService } from "./domain/query/taskQueryService";


export class TaskInGroupService {

  constructor(@Inject('TASK_QUERY_REPOSITORY') private taskRepository: TaskQueryService) { }

  findByGroupId(groupId: number): Promise<GroupBelongTasksDto[]> {
    return this.taskRepository.getTasksByGroupId(groupId);
  }
}
