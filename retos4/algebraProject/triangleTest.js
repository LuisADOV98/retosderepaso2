"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var triangle_1 = require("./triangle");
var point_1 = require("./point");
var punto1 = new point_1.Point(45, 55);
var punto2 = new point_1.Point(5, 500);
var punto3 = new point_1.Point(47, 60);
var triangulo1 = new triangle_1.Triangle(punto1, punto2, punto3);
console.log(triangulo1.calculateLengthSides());
