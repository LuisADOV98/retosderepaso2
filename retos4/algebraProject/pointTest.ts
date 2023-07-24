import { Point } from "./point";


let point1: Point = new Point(-155,-250)

console.log(point1.toString());
console.log(point1.distanceToOrigin());
console.log(point1.calcularDistancia(point1));

console.log(point1.calculateQuadrant());

let point2: Point = new Point(808,56)
let point3: Point = new Point(357, 159)
let point4: Point = new Point(753,654)
let point5: Point = new Point(729,183)