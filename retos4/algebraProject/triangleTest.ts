import { Triangle } from "./triangle";

import { Point } from "./point";

let punto1:Point = new Point(45,55)
let punto2:Point = new Point(5,500)
let punto3:Point = new Point(47,60)
let triangulo1: Triangle = new Triangle(punto1,punto2,punto3)

console.log(triangulo1.calculateLengthSides());
