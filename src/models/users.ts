import { Entity } from "./entity";

type IUsersType = {
  id?: string;
  name: string;
  email: string;
}
class User extends Entity<IUsersType> {
  private constructor(props: IUsersType, id?: string) {
    super(props, id)
  }

  static create(props: IUsersType, id?: string) {
    if (props.name) throw new Error('Name is required');
    const user = new User(props);
    return user;
  }
}

export { User };
export type { IUsersType };