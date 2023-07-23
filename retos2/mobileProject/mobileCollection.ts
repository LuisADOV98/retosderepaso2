
import { Mobile } from "./mobile";

export class MobileCollection{
   private mobiles: Mobile[]
   private totalPrice: number
        constructor(mobiles: Mobile[], totalPriceCalculation: number){
            this.mobiles = mobiles
            this.totalPrice 
        }
    
    getMobiles():Mobile[]{
        return this.mobiles
    }
    setMobiles(newMobiles):void{
        this.mobiles = newMobiles
    }
    getTotalPrice():number{
        return this.totalPrice
    }
    setTotalPrice(newTotalPrice){
        this.totalPrice = newTotalPrice
    }
    printCollection():Mobile[]{
        return this.mobiles
    
    }

    }

