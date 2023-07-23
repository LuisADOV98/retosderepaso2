
// retos numero par en array[]

function hasEven(myNums:number[]):boolean {
    let i:number = 0;
    while (i < myNums.length) {
        if (myNums[i] % 2 === 0) {
            return true;
        }
        i++;
    }
    return false;
}
let arrNum2:number[] = [1, 3, 5, 8, 9];
let resultadoWhile:boolean = hasEven(arrNum2);
console.log(resultadoWhile); 


// reto while M

function startWithM(myNames: string[]):boolean {
    let i:number = 0;
    while (i < myNames.length) {
      if (myNames[i][0] !== 'M') {
        return false;
      }
      i++;
    }
    return true;
  }

let arrNombres1:string[] = ["Maria", "Marco", "Mario", "Marcelo", "Marta"]
let arrNombres2:string[] = ["Marina", "Martina", "Samuel", "Cedro", "Carlos"]
console.log(startWithM(arrNombres1));
console.log(startWithM(arrNombres2));

