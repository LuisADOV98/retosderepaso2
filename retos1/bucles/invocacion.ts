import { add } from "./buclesFor";
import { isEven } from "./condicionales";


let array1:string[] = ["casa", "coche", "ciudad", "cesta"]
let array2:string[] = ["barco", "baca", "bicicleta", "balon", "bisiesto", "brasil"]
let array3:string[] = ["venezuela", "veneno", "voltaje"]

let resultado1:number = add(array1);
let resultado2:number = add(array2);
let resultado3:number = add(array3)

console.log(resultado1);
console.log(isEven(resultado1));

console.log(resultado2);
console.log(isEven(resultado2));

console.log(resultado3);
console.log(isEven(resultado3));


