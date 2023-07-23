"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(vertex1, vertex2, vertex3) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }
    Triangle.prototype.calculateLengthSides = function () {
        var x = this.vertex1.calcularDistancia(this.vertex2);
        var y = this.vertex2.calcularDistancia(this.vertex3);
        var z = this.vertex3.calcularDistancia(this.vertex1);
        return [x, y, z];
    };
    return Triangle;
}());
exports.Triangle = Triangle;
