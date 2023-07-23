

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
    public calcularDistancia(anotherPoint: Point):number{
        let w = this.x - anotherPoint.getX();
        let z = this.y - anotherPoint.getY();
        return Math.sqrt(w * w + z * z);
    }
    calculateQuadrant():number{
            if (this.x === 0 || this.y === 0) {
              return 0;
            } else if (this.x > 0 && this.y > 0) {
              return 1;
            } else if (this.x < 0 && this.y > 0) {
              return 2;
            } else if (this.x < 0 && this.y < 0) {
              return 3;
            } else {
              return 4;
            }
          }
          public calculateNearest(points: Point[]): Point {
            let nearestPoint = points[0];
            let minDistance = this.calcularDistancia(points[0]);
        
            for (let i = 1; i < points.length; i++) {
              const currentDistance = this.calcularDistancia(points[i]);
              if (currentDistance < minDistance) {
                minDistance = currentDistance;
                nearestPoint = points[i];
              }
            }
        
            return nearestPoint;
          }
}