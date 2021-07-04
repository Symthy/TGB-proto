import { ValueInvalidException } from "@/exception/valueInvalidException";
import { ValueNullException } from "@/exception/valueNullException";

export class TaskContent {
  constructor(private _value: string) {
    if (_value == null) {
      throw new ValueNullException("taskContent");
    }
    // max: 1GB
    if (encodeURI(_value).replace(/%../g, "*").length < 1024 * 1024 * 1024) {
      throw new ValueInvalidException("", "taskContent")
    }
  }
}
