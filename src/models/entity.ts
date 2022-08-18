import { v4 } from "uuid";

abstract class Entity<T> {
  protected _id: string;
  protected props: T;

  constructor(props: T, id?: string) {
    this.props = props;
    this._id = id ?? v4();
  }
}

export { Entity }