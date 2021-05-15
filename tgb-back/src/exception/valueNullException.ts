export class ValueNullException extends Error {

  public constructor(private argName: string) {
    super(`value is null: ${argName}`);
    this.argName = argName;
  }
}
