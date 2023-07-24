"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var MobileCollection = /** @class */ (function () {
    function MobileCollection(mobiles) {
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    MobileCollection.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileCollection.prototype.setMobiles = function (newMobiles) {
        this.mobiles = newMobiles;
    };
    MobileCollection.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileCollection.prototype.setTotalPrice = function (newTotalPrice) {
        this.totalPrice = newTotalPrice;
    };
    MobileCollection.prototype.printCollection = function () {
        var todos;
        for (var i = 0; i < this.mobiles.length; i++) {
            todos += this.mobiles[i].printMobile();
        }
        return todos;
    };
    MobileCollection.prototype.totalPriceCalculation = function () {
        var total = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            total += this.mobiles[i].getPrice();
        }
        return total;
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
