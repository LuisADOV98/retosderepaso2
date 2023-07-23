"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var point1 = new point_1.Point(-155, -250);
console.log(point1.toString());
console.log(point1.distanceToOrigin());
console.log(point1.calcularDistancia(101, 111));
console.log(point1.calculateQuadrant());
