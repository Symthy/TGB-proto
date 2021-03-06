import { UserCreateCommand } from "@/user/command/userCreate.command";
import { UserUpdateCommand } from "@/user/command/userUpdate.command";
import { UserModel } from "./repository/userModel";
import { Email } from "./value/email";
import { Nickname } from "./value/nickname";
import { Password } from "./value/password";
import { RoleValue } from "./value/role";

export class User {
  private role;
  constructor(
    private password: Password,
    private nickname: Nickname,
    private email?: Email,
    private id?: number
  ) {
    this.role = RoleValue.user();
  }

  static create(command: UserCreateCommand | UserUpdateCommand): User {
    if (command instanceof UserCreateCommand) {
      return new User(
        new Password(command.password),
        new Nickname(command.nickname),
        new Email(command.email),
      );
    }
    if (command instanceof UserUpdateCommand) {
      return new User(
        new Password(command.password),
        new Nickname(command.nickname),
        new Email(command.email),
        command.id
      );
    }
    throw new Error(); // TODO
  }

  toDbModel(): UserModel {
    return {
      id: this.id,
      password: this.password.value,
      nickname: this.nickname.value,
      email: this.email.value,
      role: this.role
    }
  }

}
