import { Email } from "./model/user/email";
import { Nickname } from "./model/user/nickname";
import { Password } from "./model/user/password";

export class User {
  private role;
  constructor(private password: Password, private nickname: Nickname, private email?: Email, private id?: number) {
    this.role = "USER";
  }

  toModel() {
    return {
      password: this.password.value,
      nickname: this.nickname.value,
      email: this.email.value,
      role: this.role
    }
  }

}
