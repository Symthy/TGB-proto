import { Email } from "@/user/domain/user/email";
import { Nickname } from "@/user/domain/user/nickname";
import { Password } from "@/user/domain/user/password";
import { User } from "../domain/user";
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

  toDomain(): User {
    return new User(
      new Password(this._password),
      new Nickname(this._nickname),
      new Email(this._email),
      this._id
    );
  }

}
