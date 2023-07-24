


// reto zodiac

function zodiac(day:number,month:number):string[]{
    let zodiacArr: string[] = []
    if( (day > 21 && month == 1)|| (day < 19 && month == 2)){
    zodiacArr.push("acuario")
    }else if((day > 20 && month == 2)|| (day < 20 && month == 3)){
    zodiacArr.push("piscis")
    }else if((day > 21 && month == 3) || (day < 19 && month == 4)){
     zodiacArr.push("aries")
    }else if((day > 20 && month == 4) || (day < 20 && month == 5)){
     zodiacArr.push("tauro")
    }else if((day > 21 && month == 5) || (day < 20 && month == 6)) {
     zodiacArr.push("geminis")
    }else if((day > 21 && month == 6) || (day < 22 && month == 7)) {
     zodiacArr.push("cancer")
    }else if((day > 23 && month == 7) || (day < 22 && month == 8)) {
     zodiacArr.push("leo")
    }else if((day > 23 && month == 8) || (day < 20 && month == 9)) {
     zodiacArr.push("virgo")
    }else if((day > 23 && month == 9) || (day < 22 && month == 10)) {
     zodiacArr.push("libra")
    }else if((day > 23 && month == 10) || (day < 21 && month == 11)) {
     zodiacArr.push("escorpio")
    }else if((day > 22 && month == 11) || (day < 21 && month == 12)) {
     zodiacArr.push("sagitario")
    }else if((day > 22 && month == 12) || (day < 20 && month == 1)) {
     zodiacArr.push("capricornio")
    }else{
     console.log("ingrese un numero para el dia y texto para el mes: Ejemplo.5,3");
    }
    return zodiacArr
 }
 console.log(zodiac(10,10));


//  reto continentes

function continent(country:string):string[]{
    let continentes: string[] = []
    if (country == "rusia" || country == "portugal" || country == "francia" || country == "italia" ) {
    continentes.push("europa")
 } else if (country == "venezuela" || country == "argentina" || country == "colombia" || country == "peru"){
    continentes.push("america")
 } else if (country == "nueva zelanda" || country == "australia" || country == "fiyi" || country == "samoa"){
    continentes.push("oceania")
 } else if (country == "china" || country == "japon" || country == "korea" || country == "india"){
    continentes.push("asia")
 } else if (country == "nigeria" || country == "marruecos" || country == "kenia" || country == "ghana"){
    continentes.push("africa")
 }
 return continentes
}
console.log(continent("china"));


// retos pares e impares

export function isEven(numero:number):string {
   if (numero % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
    return ""
}
// console.log(isEven(5));

