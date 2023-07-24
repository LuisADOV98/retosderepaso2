// retos numero par en array[]
function hasEven(myNums) {
    var i = 0;
    var bool1 = false;
    while (i < myNums.length && !bool1) {
        bool1 = myNums[i] % 2 == 0;
        i++;
    }
    return bool1;
}
var arrNum2 = [1, 3, 5, 7, 9];
console.log(hasEven(arrNum2));
// reto while M
function startWithM(myNames) {
    var i = 0;
    var bool = true;
    while (i < myNames.length && bool == true) {
        if (myNames[i][0] !== 'M') {
            bool = false;
        }
        i++;
    }
    return bool;
}
// let arrNombres1:string[] = ["Maria", "Marco", "Mario", "Marcelo", "Marta"]
// let arrNombres2:string[] = ["Marina", "Martina", "Samuel", "Cedro", "Carlos"]
// console.log(startWithM(arrNombres1));
// console.log(startWithM(arrNombres2));
