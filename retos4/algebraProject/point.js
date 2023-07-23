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
    Point.prototype.calcularDistancia = function (anotherPoint) {
        var w = this.x - anotherPoint.getX();
        var z = this.y - anotherPoint.getY();
        return Math.sqrt(w * w + z * z);
    };
    Point.prototype.calculateQuadrant = function () {
        if (this.x === 0 || this.y === 0) {
            return 0;
        }
        else if (this.x > 0 && this.y > 0) {
            return 1;
        }
        else if (this.x < 0 && this.y > 0) {
            return 2;
        }
        else if (this.x < 0 && this.y < 0) {
            return 3;
        }
        else {
            return 4;
        }
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
