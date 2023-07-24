
import { Mobile } from "./mobile";

export class MobileCollection{
   private mobiles: Mobile[]
   private totalPrice: number
        constructor(mobiles: Mobile[]){
            this.mobiles = mobiles
            this.totalPrice = this.totalPriceCalculation()
        }
    
    public getMobiles():Mobile[]{
        return this.mobiles
    }
    public setMobiles(newMobiles):void{
        this.mobiles = newMobiles
    }
    public getTotalPrice():number{
        return this.totalPrice
    }
    public setTotalPrice(newTotalPrice){
        this.totalPrice = newTotalPrice
    }
    public printCollection():string{
        let todos;
        for (let i = 0; i < this.mobiles.length; i++) {
            todos += this.mobiles[i].printMobile()
        }
            return todos
        }

    public totalPriceCalculation(){
        let total:number = 0
        for (let i = 0; i < this.mobiles.length; i++) {
        total += this.mobiles[i].getPrice();
        }
        return total
    }

    }

