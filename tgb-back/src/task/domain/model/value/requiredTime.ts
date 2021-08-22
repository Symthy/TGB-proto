import { ValueInvalidException } from "@/exception/valueInvalidException";
import { ValueNullException } from "@/exception/valueNullException";
import { SelectTime, SelectTimeValue } from "@/tgb/timeList";

export class RequiredTime {

  constructor(private _value: string) {
    if (_value == null) {
      throw new ValueNullException("requitedTime");
    }
    if (!SelectTimeValue.contains(_value)) {
      throw new ValueInvalidException("", "requiredTime");
    }
  }

  get value(): SelectTime {
    return this._value as SelectTime;
  }
}
