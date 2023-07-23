

export class Mobile {
   private name: string
   private trademark: string
   private model: string
   private color: string
   private price: number

        constructor(name:string, trademark:string, model:string, color:string, price:number){
            this.name = name
            this.trademark = trademark
            this.model = model
            this.color = color
            this.price = price
        }

    getName():string{
        return this.name
    }
    setName(newName):void{
        this.name= newName
    }
    getTrademark():string {
        return this.trademark
    }
    setTrademark(newTrademark):void{
        this.trademark = newTrademark
    }
    getModel():string{
        return this.model
    }
    setModel(newModel):void{
        this.model = newModel
    }
    getColor():string{
        return this.color
    }
    setColor(newColor):void{
        this.color = newColor
    }
    getPrice():number{
        return this.price
    }
    setPrice(newPrice):void{
        this.price = newPrice
    }
    printMobile(){
        return `
        The characteristics of the mobile name are:
        Name: ${this.name},
        Trademark: ${this.trademark}.
        Model: ${this.model},
        Color: ${this.color},
        Price :${this.price}`
    }
}