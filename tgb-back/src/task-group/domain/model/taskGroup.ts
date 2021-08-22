export class TaskGroup {
  constructor(
    private _id: number,
    private _name: string,
    private _summary: string
  ) { }

  get id(): number {
    return this.id;
  }

  get name(): string {
    return this._name;
  }

  get summary(): string {
    return this._summary;
  }
}
