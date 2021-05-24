import { Email } from "@/tgb/domain/model/user/email";
import { Nickname } from "@/tgb/domain/model/user/nickname";
import { Password } from "@/tgb/domain/model/user/password";
import { User } from "@/tgb/domain/user";
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  @IsString()
  private password;

  @IsNotEmpty()
  @IsString()
  private retryPassword;

  @IsNotEmpty()
  @IsString()
  private nickname;

  @IsString()
  private email;

  constructor(password: string, retryPassword: string, nickname: string, email: string) {
    this.password = password;
    this.retryPassword = retryPassword;
    this.nickname = nickname;
    this.email = email;
  }

  public getPassword(): string {
    return this.password;
  }

  public getRetryPassword(): string {
    return this.retryPassword;
  }

  toDomain(): User {
    return new User(
      new Password(this.password),
      new Nickname(this.nickname),
      new Email(this.email));
  }
}
