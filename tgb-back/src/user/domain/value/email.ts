import { ValueNullException } from "@/exception/valueNullException";

export class Email {
  constructor(private _value: string) {
    if (_value == null) throw new ValueNullException("email");
    this._value = _value;
  }

  get value() {
    return this._value;
  }
}
