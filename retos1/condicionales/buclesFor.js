// reto de numeros impares
function evenNumbers(num) {
    for (var i = 0; i <= num; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
    return "";
}
console.log(evenNumbers(13));
// array al reves
function myRevert(myArray) {
    var reversedArr = [];
    for (var i = myArray.length - 1; i >= 0; i--) {
        reversedArr.push(myArray[i]);
    }
    return reversedArr;
}
var arrNum = [1, 2, 3, 4, 5];
var arrAlreves = myRevert(arrNum);
console.log(arrAlreves);
// reto de arcoiris
function isRainbow(colors) {
    var arcoiris = ["rojo", "naranja", "amarillo", "verde", "cian", "azul", "violeta"];
    for (var i = 0; i < colors.length; i++) {
        var color = colors[i];
        if (arcoiris.includes(color)) {
            console.log("".concat(colors[i], " est\u00E1 en el arco\u00EDris."));
        }
        else {
            console.log("".concat(colors[i], " no est\u00E1 en el arco\u00EDris."));
        }
    }
}
var colores = ["rojo", "verde", "rosa", "azul", "amarillo", "marron", "beige"];
isRainbow(colores);
// reto sumar palabras
function add(myWords) {
    var sumaCaracteres = 0;
    for (var i = 0; i < myWords.length; i++) {
        sumaCaracteres += myWords[i].length;
    }
    return sumaCaracteres;
}
var palabras = ["pepe", "aun", "esta", "desaparecido"];
var resultado = add(palabras);
console.log(resultado);
