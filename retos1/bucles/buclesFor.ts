

// reto de numeros impares

function evenNumbers(num:number) {
    for (let i = 0; i <= num; i++) {
        if (i % 2 !== 0){
            console.log(i);
        }
    } 
    return""
}
console.log(evenNumbers(13));


// array al reves



function myRevert(myArray: number []) {
    let reversedArr: number [] = [];

    for (let i = myArray.length - 1; i >= 0; i--) {
        reversedArr.push(myArray[i]);
    }

    return reversedArr;
}
let arrNum = [1, 2, 3, 4, 5];
let arrAlreves = myRevert(arrNum);
console.log(arrAlreves);


// reto de arcoiris

function isRainbow(colors: string[]) {
    let arcoiris = ["rojo", "naranja", "amarillo", "verde", "cian", "azul", "violeta"];

    for (let i = 0; i < colors.length; i++) {
        let color = colors[i];
        if (arcoiris.includes(color)) {
            console.log(`${colors[i]} está en el arcoíris.`);
        } else {
            console.log(`${colors[i]} no está en el arcoíris.`);
        }
    } 
  
}
let colores = ["rojo", "verde", "rosa", "azul", "amarillo", "marron", "beige"];
isRainbow(colores);


// reto sumar palabras

function add(myWords) {
    let sumaCaracteres = 0;

    for (let i = 0; i < myWords.length; i++) {
        sumaCaracteres += myWords[i].length;
    }

    return sumaCaracteres;
}
let palabras = ["pepe", "aun", "esta", "desaparecido"];
let resultado = add(palabras);
console.log(resultado);