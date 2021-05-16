import { ValueInvalidException } from "@/exception/valueInvalidException";
import { ValueNullException } from "@/exception/valueNullException";

const bcrypt = require('bcrypt');

export class Password {

  // source: https://qiita.com/mpyw/items/886218e7b418dfed254b
  private static regexp = new RegExp('^(?=.*?[a-z])(?=.*?\d)[a-z\d]*', 'i');
  private encryptedPassword;

  constructor(value: string) {
    if (value == null) {
      throw new ValueNullException(value);
    }
    if (value.length < 8 && value.length > 32) {
      throw new ValueInvalidException("length range over.", "password")
    }
    if (!Password.regexp.test(value)) {
      throw new ValueInvalidException("no match.", "password")
    }
    this.encryptedPassword = bcrypt.hashSync(value, 10);
  }

  get value() {
    return this.encryptedPassword;
  }
}
