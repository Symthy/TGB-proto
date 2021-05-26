import { Email } from "@/tgb/domain/model/user/email";
import { Nickname } from "@/tgb/domain/model/user/nickname";
import { Password } from "@/tgb/domain/model/user/password";
import { User } from "@/tgb/domain/user";
import { CreateUserDto } from "../dto/create-user.dto";

export class UserCreateCommand {
  private _password: string;
  private _retryPassword: string;
  private _nickname: string;
  private _email?: string;

  constructor(user: CreateUserDto) {
    this._password = user.password;
    this._retryPassword = user.retryPassword;
    this._nickname = user.nickname;
    this._email = user.email;
  }

  get password(): string {
    return this._password;
  }

  get retryPassword(): string {
    return this._retryPassword;
  }

  toDomain(): User {
    return new User(
      new Password(this._password),
      new Nickname(this._nickname),
      new Email(this._email));
  }

}
