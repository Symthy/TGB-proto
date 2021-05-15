import { ValueInvalidException } from "@/exception/valueInvalidException";
import { ValueNullException } from "@/exception/valueNullException";

export class Nickname {
  constructor(private value: string) {
    if (value == null) {
      throw new ValueNullException("nickname");
    }
    if (value.length < 32) {
      throw new ValueInvalidException("", "nickname");
    }
    this.value = value;
  }
}
