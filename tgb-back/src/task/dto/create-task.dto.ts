import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateTaskDto {

  @IsNotEmpty()
  @IsString()
  title;

  @IsNotEmpty()
  @IsNumberString()
  progressPercent;

  @IsNotEmpty()
  @IsString()
  scheduledTime;

  @IsNotEmpty()
  @IsString()
  status;

  @IsNotEmpty()
  @IsNumberString()
  groupId;

  constructor(title, progressPercent, scheduledTime, status, groupId) {
    this.title = title;
    this.progressPercent = progressPercent;
    this.scheduledTime = scheduledTime;
    this.status = status;
    this.groupId = groupId;
  }
}
