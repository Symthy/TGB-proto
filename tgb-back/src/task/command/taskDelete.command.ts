export class TaskDeleteCommand {
  constructor(private _id) {
  }

  get id() {
    return this._id;
  }
}
