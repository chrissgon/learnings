import { v4 as uuidv4 } from "uuid";

export class User {
  public readonly ID?: string;

  public name: string;
  public email: string;
  public password: string;

  constructor(props: User) {
    Object.assign(this, props);

    if (!props.ID) this.ID = uuidv4();
  }
}