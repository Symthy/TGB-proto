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
  estimateTime;

  @IsNotEmpty()
  @IsString()
  status;

  @IsNotEmpty()
  @IsNumberString()
  groupId;
}
