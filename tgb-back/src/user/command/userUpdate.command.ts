import { UpdateUserDto } from "../dto/update-user.dto";

export class UserUpdateCommand {
  private _id: number;
  private _password?: string;
  private _nickname?: string;
  private _email?: string;

  constructor(id: number, user: UpdateUserDto) {
    this._id = id
    this._password = user.password;
    this._nickname = user.nickname;
    this._email = user.email;
  }

  get id(): number {
    return this._id;
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
