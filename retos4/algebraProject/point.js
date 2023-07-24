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
        return "".concat(this.getX, ", ").concat(this.getY);
    };
    Point.prototype.distanceToOrigin = function () {
        return Math.round(Math.sqrt(this.getX() * this.getX() + this.getY() * this.getY()));
    };
    Point.prototype.calcularDistancia = function (anotherPoint) {
        var w = this.getX() - anotherPoint.getX();
        var z = this.getY() - anotherPoint.getY();
        return Math.sqrt(w * w + z * z);
    };
    Point.prototype.calculateQuadrant = function () {
        var resultado;
        if (this.x === 0 || this.y === 0) {
            resultado = 0;
        }
        else if (this.getX() > 0 && this.getY() > 0) {
            resultado = 1;
        }
        else if (this.getX() < 0 && this.getY() > 0) {
            resultado = 2;
        }
        else if (this.getX() < 0 && this.getY() < 0) {
            resultado = 3;
        }
        else {
            resultado = 4;
        }
        return resultado;
    };
    Point.prototype.calculateNearest = function (points) {
        var nearestPoint = points[0];
        var minDistance = this.calcularDistancia(points[0]);
        for (var i = 1; i < points.length; i++) {
            var currentDistance = this.calcularDistancia(points[i]);
            if (currentDistance < minDistance) {
                minDistance = currentDistance;
                nearestPoint = points[i];
            }
        }
        return nearestPoint;
    };
    return Point;
}());
exports.Point = Point;
