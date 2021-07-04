import { Email } from "./model/user/email";
import { Nickname } from "./model/user/nickname";
import { Password } from "./model/user/password";
import { RoleValue } from "./model/user/role";

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

  toModel() {
    return {
      id: this.id,
      password: this.password.value,
      nickname: this.nickname.value,
      email: this.email.value,
      role: this.role
    }
  }

}
