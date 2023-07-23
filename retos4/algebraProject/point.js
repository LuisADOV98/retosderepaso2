"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (newX) {
        this.x = newX;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.setY = function (newY) {
        this.y = newY;
    };
    Point.prototype.toString = function () {
        return "".concat(this.x, ", ").concat(this.y);
    };
    Point.prototype.distanceToOrigin = function () {
        return Math.round(Math.sqrt(this.x * this.x + this.y * this.y));
    };
    Point.prototype.calcularDistancia = function (z, w) {
        return Math.round(Math.sqrt(z * z + w * w)) - Math.round(Math.sqrt(this.x * this.x + this.y * this.y));
    };
    return Point;
}());
exports.Point = Point;
