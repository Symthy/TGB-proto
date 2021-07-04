import { ValueInvalidException } from "@/exception/valueInvalidException";
import { ValueNullException } from "@/exception/valueNullException";

export class TaskTitle {
  constructor(private _value: string) {
    if (_value == null) {
      throw new ValueNullException("taskTitle");
    }
    if (_value.length > 100) {
      throw new ValueInvalidException("", "taskTitle")
    }
  }

  get value(): string {
    return this._value;
  }
}
