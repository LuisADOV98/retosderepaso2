import { MobileCollection } from "./mobileCollection";

import { Mobile } from "./mobile";

let mobile1: Mobile = new Mobile("nokia", "mediamarkt", "slide", "verde", 500)
let mobile2: Mobile = new Mobile("sony", "fnac", "Smart", "azul", 800)
let mobile3: Mobile = new Mobile("samsung", "samsungStore", "ss22", "morado", 1100)
let mobile4: Mobile= new Mobile("huawei", "mediamarkt", "p50", "negro", 900)
 
let myMobiles1:Mobile[] =[mobile1,mobile2,mobile3,mobile4]
let myCollection:MobileCollection = new MobileCollection(myMobiles1)
myCollection.setMobiles(myMobiles1)


console.log(myCollection.printCollection());
// console.log(myCollection.getMobiles());
// console.log(myCollection.getTotalPrice());
// console.log(myCollection.totalPriceCalculation());


