import { PartialType } from "@nestjs/swagger";
import { CreateTaskDetailDto } from "./create-taskDetail.dto";

export class UpdateTaskDto extends PartialType(CreateTaskDetailDto) { }
