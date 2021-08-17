import { CreateUserDto } from "../dto/create-user.dto";

export class UserCreateCommand {
  private _password: string;
  private _nickname: string;
  private _email?: string;

  constructor(user: CreateUserDto) {
    this._password = user.password;
    this._nickname = user.nickname;
    this._email = user.email;
  }

  get password(): string {
    return this._password;
  }

  get nickname(): string {
    return this._nickname;
  }

  get email(): string {
    return this._email;
  }

}
