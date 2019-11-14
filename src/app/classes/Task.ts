export class Task {
  private _id: number;

  constructor(   public title: string,
                 public description: string,
                 public isDone: boolean) {}


  getid(): number {
    return this._id;
  }

  setid(value: number) {
    this._id = value;
  }
}

