export class ValueInvalidException extends Error {

  public constructor(private msg: string, private argName: string) {
    super(`${msg} value is invalid: ${argName}`);
    this.argName = argName;
  }
}
