
// retos numero par en array[]

function hasEven(myNums:number[]):boolean{
    let i:number = 0;
    let bool1:boolean = false
    while (i < myNums.length && !bool1) {
      bool1 = myNums[i] % 2 == 0
        i++;
    }
    return bool1;
}
let arrNum2:number[] = [1, 3, 5, 7, 9];
console.log(hasEven(arrNum2)); 


// reto while M

function startWithM(myNames: string[]):boolean {
    let i:number = 0;
    let bool: boolean = true
    while (i < myNames.length && bool == true) {
      if (myNames[i][0] !== 'M' ) {
        bool = false
      }
      i++;
    }
    return bool;
  }

// let arrNombres1:string[] = ["Maria", "Marco", "Mario", "Marcelo", "Marta"]
// let arrNombres2:string[] = ["Marina", "Martina", "Samuel", "Cedro", "Carlos"]
// console.log(startWithM(arrNombres1));
// console.log(startWithM(arrNombres2));

