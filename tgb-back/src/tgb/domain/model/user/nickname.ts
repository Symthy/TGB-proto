import { ValueInvalidException } from "@/exception/valueInvalidException";
import { ValueNullException } from "@/exception/valueNullException";

export class Nickname {
  constructor(private _value: string) {
    if (_value == null) {
      throw new ValueNullException("nickname");
    }
    if (_value.length > 32) {
      throw new ValueInvalidException("", "nickname");
    }
    this._value = _value;
  }

  get value() {
    return this._value;
  }
}
