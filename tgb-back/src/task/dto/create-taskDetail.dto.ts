import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateTaskDetailDto {

  @IsNotEmpty()
  @IsNumberString()
  taskId;

  @IsNotEmpty()
  @IsString()
  createdDateTime;

  @IsString()
  content;

  @IsString()
  resultTime;

  @IsNumberString()
  stepCount;

  @IsNumberString()
  codeReviewPoints;
}
