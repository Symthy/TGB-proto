import { ValueInvalidException } from "@/exception/valueInvalidException";
import { ValueNullException } from "@/exception/valueNullException";
import { WorkState, WorkStatusValue } from "@/tgb/workStatus";

export class Status {
  constructor(private _value: string) {
    if (_value == null) {
      throw new ValueNullException("Status");
    }
    if (!WorkStatusValue.contains(_value)) {
      throw new ValueInvalidException("", "status")
    }
  }

  get value(): WorkState {
    return this._value as WorkState;
  }
}
