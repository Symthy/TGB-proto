import { Role } from "@prisma/client";
import { Profile } from "../../profile";
import { Email } from "./email";
import { Nickname } from "./nickname";
import { Password } from "./password";

export class User {

  constructor(private password: Password, nickname: Nickname, role: Role, private id?: number, private email?: Email) {
  }

}
