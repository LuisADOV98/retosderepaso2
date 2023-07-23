

export class Point{
    private x: number
    private y: number

    constructor(x:number,y:number){
        this.x = x
        this.y = y
    }

    public getX():number{
        return this.x
    }
    public setX(newX):void{
        this.x = newX
    }
    public getY():number{
        return this.y
    }
    public setY(newY):void{
        this.y = newY
    }
    public toString(){
        return `${this.x}, ${this.y}`
    }
    public distanceToOrigin():number{
        return Math.round(Math.sqrt(this.x * this.x + this.y * this.y))
    }
    public calcularDistancia(z:number,w:number){
        return Math.round(Math.sqrt(z * z + w * w)) - Math.round(Math.sqrt(this.x * this.x + this.y * this.y))
    }
}