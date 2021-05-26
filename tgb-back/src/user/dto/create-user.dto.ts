import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  @IsString()
  password;

  @IsNotEmpty()
  @IsString()
  retryPassword;

  @IsNotEmpty()
  @IsString()
  nickname;

  @IsString()
  email;

  constructor(password: string, retryPassword: string, nickname: string, email: string) {
    this.password = password;
    this.retryPassword = retryPassword;
    this.nickname = nickname;
    this.email = email;
  }
}
