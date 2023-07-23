"use strict";
// reto zodiac
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEven = void 0;
function zodiac(day, month) {
    var zodiacArr = ["acuario ", "piscis ", "aries ", "tauro ", "geminis ", "cancer ", "leo ", "virgo ", "libra ", "escorpio ", "sagitario ", "capricornio"];
    if ((day > 21 && month == 1) || (day < 19 && month == 2)) {
        console.log("Tu signo es: " + zodiacArr[0]);
    }
    else if ((day > 20 && month == 2) || (day < 20 && month == 3)) {
        console.log("Tu signo es: " + zodiac[1]);
    }
    else if ((day > 21 && month == 3) || (day < 19 && month == 4)) {
        console.log("Tus signo es: " + zodiac[2]);
    }
    else if ((day > 20 && month == 4) || (day < 20 && month == 5)) {
        console.log("Tu signo es: " + zodiac[3]);
    }
    else if ((day > 21 && month == 5) || (day < 20 && month == 6)) {
        console.log("Tu signo es: " + zodiac[4]);
    }
    else if ((day > 21 && month == 6) || (day < 22 && month == 7)) {
        console.log("Tu signo es: " + zodiac[5]);
    }
    else if ((day > 23 && month == 7) || (day < 22 && month == 8)) {
        console.log("Tu signo es: " + zodiac[6]);
    }
    else if ((day > 23 && month == 8) || (day < 20 && month == 9)) {
        console.log("Tu signo es: " + zodiac[7]);
    }
    else if ((day > 23 && month == 9) || (day < 22 && month == 10)) {
        console.log("Tu signo es: " + zodiac[8]);
    }
    else if ((day > 23 && month == 10) || (day < 21 && month == 11)) {
        console.log("Tu signo es: " + zodiac[9]);
    }
    else if ((day > 22 && month == 11) || (day < 21 && month == 12)) {
        console.log("Tu signo es: " + zodiac[10]);
    }
    else if ((day > 22 && month == 12) || (day < 20 && month == 1)) {
        console.log("Tu signo es: " + zodiac[11]);
    }
    else {
        console.log("ingrese un numero para el dia y texto para el mes: Ejemplo.5,3");
    }
    return "";
}
//  console.log(zodiac(23,1));
//  reto continentes
function continent(country) {
    var continentes = ["Europa ", "America ", "Oceania", "Asia ", "Africa"];
    if (country == "rusia" || country == "portugal" || country == "francia" || country == "italia") {
        console.log("tu continente es:" + continentes[0]);
    }
    else if (country == "venezuela" || country == "argentina" || country == "colombia" || country == "peru") {
        console.log("tu continente es: " + continentes[1]);
    }
    else if (country == "nueva zelanda" || country == "australia" || country == "fiyi" || country == "samoa") {
        console.log("tu continente es: " + continentes[2]);
    }
    else if (country == "china" || country == "japon" || country == "korea" || country == "india") {
        console.log("tu continente es: " + continentes[3]);
    }
    else if (country == "nigeria" || country == "marruecos" || country == "kenia" || country == "ghana") {
        console.log("tu continente es: " + continentes[4]);
    }
    return "";
}
// console.log(continent("china"));
// retos pares e impares
function isEven(numero) {
    if (numero % 2 === 0) {
        console.log("El número es par");
    }
    else {
        console.log("El número es impar");
    }
    return "";
}
exports.isEven = isEven;
// console.log(isEven(5));
