import { Email } from "./user/email";
import { Nickname } from "./user/nickname";
import { Password } from "./user/password";
import { RoleValue } from "./user/role";


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
