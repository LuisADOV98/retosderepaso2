// retos numero par en array[]
function hasEven(myNums) {
    var i = 0;
    while (i < myNums.length) {
        if (myNums[i] % 2 === 0) {
            return true;
        }
        i++;
    }
    return false;
}
var arrNum2 = [1, 3, 5, 8, 9];
var resultadoWhile = hasEven(arrNum2);
console.log(resultadoWhile);
// reto while M
function startWithM(myNames) {
    var i = 0;
    while (i < myNames.length) {
        if (myNames[i][0] !== 'M') {
            return false;
        }
        i++;
    }
    return true;
}
var arrNombres1 = ["Maria", "Marco", "Mario", "Marcelo", "Marta"];
var arrNombres2 = ["Marina", "Martina", "Samuel", "Cedro", "Carlos"];
console.log(startWithM(arrNombres1));
console.log(startWithM(arrNombres2));
