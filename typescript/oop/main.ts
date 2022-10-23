import Car from "./Car"

const ferrari = new Car("Ferrari");

ferrari.getCar();
console.log(ferrari);
console.log("teste");

interface IObject{
    [name:string]: Array<string>
}

const obj: IObject = {};

obj[4.4] = [""]
