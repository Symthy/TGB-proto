import { ValueInvalidException } from "@/exception/valueInvalidException";
import { ValueNullException } from "@/exception/valueNullException";

const bcrypt = require('bcrypt');

export class Password {

  // source: https://qiita.com/mpyw/items/886218e7b418dfed254b
  private static pattern = "/^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,32}$/i";
  private encryptedPassword;

  constructor(value: string) {
    if (value == null) {
      throw new ValueNullException(value);
    }
    if (value.length < 8 && value.length > 32) {
      throw new ValueInvalidException("", "email")
    }
    if (!value.match(Password.pattern)) {
      throw new ValueInvalidException("", "email")
    }
    this.encryptedPassword = bcrypt.hashSync(value, 10);
  }
}
