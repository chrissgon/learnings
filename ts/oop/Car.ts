interface ICar {
  name: string;
  getCar(): void;
}

export default class Car implements ICar {
  constructor(public name: string) {}
  getCar(): void {
    console.log(this.name);
  }
}
