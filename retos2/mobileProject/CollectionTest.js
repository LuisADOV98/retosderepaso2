"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobileCollection_1 = require("./mobileCollection");
var mobile_1 = require("./mobile");
var mobile1 = new mobile_1.Mobile("nokia", "mediamarkt", "slide", "verde", 500);
var mobile2 = new mobile_1.Mobile("sony", "fnac", "Smart", "azul", 800);
var mobile3 = new mobile_1.Mobile("samsung", "samsungStore", "ss22", "morado", 1100);
var mobile4 = new mobile_1.Mobile("huawei", "mediamarkt", "p50", "negro", 900);
var myMobiles1 = [mobile1, mobile2, mobile3, mobile4];
var myCollection = new mobileCollection_1.MobileCollection(myMobiles1);
myCollection.setMobiles(myMobiles1);
console.log(myCollection.printCollection());
// console.log(myCollection.getMobiles());
// console.log(myCollection.getTotalPrice());
// console.log(myCollection.totalPriceCalculation());