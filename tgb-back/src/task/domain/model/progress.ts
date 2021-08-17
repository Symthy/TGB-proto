import { ValueInvalidException } from "@/exception/valueInvalidException";

export class Progress {

  constructor(private _value: number = 0) {
    if (_value < 0 || _value > 100) {
      throw new ValueInvalidException("", "progress");
    }
    this._value = _value ?? 0;
  }

  get value() {
    return this._value;
  }
}
