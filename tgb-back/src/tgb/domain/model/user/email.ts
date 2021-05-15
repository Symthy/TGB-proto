import { ValueNullException } from "@/exception/valueNullException";

export class Email {
  constructor(private value: string) {
    if (value == null) throw new ValueNullException("email");
    this.value = value;
  }
}
