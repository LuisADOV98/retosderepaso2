

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
      return `${this.getX}, ${this.getY}`
  }
  public distanceToOrigin():number{
      return Math.round(Math.sqrt(this.getX() * this.getX() + this.getY() * this.getY()))
  }
  public calcularDistancia(anotherPoint: Point):number{
      let w = this.getX() - anotherPoint.getX();
      let z = this.getY() - anotherPoint.getY();
      return Math.sqrt(w * w + z * z);
  }
  calculateQuadrant():number{
          let resultado;
          if (this.x === 0 || this.y === 0) {
            resultado = 0;
          } else if (this.getX() > 0 && this.getY() > 0) {
            resultado = 1;
          } else if (this.getX() < 0 && this.getY() > 0) {
            resultado = 2;
          } else if (this.getX() < 0 && this.getY() < 0) {
            resultado = 3;
          } else {
            resultado = 4;
          }
          return resultado
        }
        public calculateNearest(points: Point[]): Point {
          let nearestPoint = points[0];
          let minDistance = this.calcularDistancia(points[0]);
      
          for (let i = 1; i < points.length; i++) {
            let currentDistance = this.calcularDistancia(points[i]);
            if (currentDistance < minDistance) {
              minDistance = currentDistance;
              nearestPoint = points[i];
            }
          }
      
          return nearestPoint;
        }
}