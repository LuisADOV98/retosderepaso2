import { Point } from "./point"

export class Triangle{
    private vertex1: Point
    private vertex2: Point
    private vertex3: Point
    constructor(vertex1:Point,vertex2:Point,vertex3:Point){
        this.vertex1 = vertex1
        this.vertex2 = vertex2
        this.vertex3 = vertex3
    }
    public calculateLengthSides():number[]{
    let x = this.vertex1.calcularDistancia(this.vertex2);
    let y = this.vertex2.calcularDistancia(this.vertex3);
    let z = this.vertex3.calcularDistancia(this.vertex1);
    return [x, y, z];
    }
}