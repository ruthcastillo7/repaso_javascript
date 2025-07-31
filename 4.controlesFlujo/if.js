//Estructura de una condicion
//1. Palabra reservada: IF
// el cuerpo de IF solo se ejecuta si es verdadero
//2. cuando dice "la condicion" o "exprecion a evaluar" sera un tipo de datos booleano.La la exprecion debe estar en parentesis
//3. El cuerpo que contendra el codigo a ejecutar en caso la condicionsea verdadera
//4. palabra reservada ELSE 
//5. cuerpo que cotendra el codigo a ejecutar en caso la exprecion sea FALSO
/////extencion que formatea el codigo e indica donde poner los punto y coma, ESLIN
if (true) {
    let suma=24+45;
    let divi=45/5;
    console.log(suma,divi);
}else{
    console.log("me ejecuto por que soy falso")
};

// crea un programa que evalue si un numero es mayor que otro y si este numero es a la vez un nuevo par
let firtsNumber=51
let secondNumber=30
if (firtsNumber>secondNumber){
    if (firtsNumber%2 == 0){
        console.log("el numero es mayor y par")
    }else{
        console.log("el numero es mayor pero es impar")
    }
}else{
    console.log("el numero es menor")
}

//crear programa que muestre el numero en texto
//forma del profe
let numero=2
if (numero==1){
    console.log("uno")
}
else if (numero==2){ //if anidado = else if.  cada linea de else if es evaluada por la computadora
    console.log("dos")
}
else if (numero==3){
    console.log("tres")
}
else if (numero==4){
    console.log("cuatro")
}
else if (numero==5){
    console.log("cinco")
}


switch (numero) { //usa menos poder computacional
    case 1:
        console.log("uno")
        break //cada que uso CASE y SWITCH se debe romper la cache ya que el switch almacena en cache
    case 2:
        console.log("dos")
        break
    case 2:
        console.log("dos")
        break
    default: // DEFAUL: es como un else. pero usa menos cpu
        console.log("fuera de rango")
        break
}







// let numeroIngresado=1
// numeros = [0, 1, 2, 3, 4]
// if (numeroIngresado==numeros){
//     numerosTexto = ["cero", "uno", "dos", "tres", "cuatro"]
//     if (numeroIngresado==0){
//         console.log(numerosTexto[0])
//     }
//     if (numeros == 1){
//         console.log(numerosTexto[1])
//     }
//     if (numeros == 2){
//         console.log(numerosTexto[2])
//     }
//     if (numeros == 3){
//         console.log(numerosTexto[3])
//     }
// }






// // en caso de que no se cumpla la condicion, IF permite permite agregar una condicion
// // ELSE que incluye un bloque de codigo que se ejecuta al no cumplirse la primera condicion
// // no puede haber un ELSE sin compañia del IF
// var aprobe = true;
// if (aprobe == true) {
//     console.log("de vacaciones 😆!!!")
// }
// else {
//     console.log("a recuperacion 😢")
// };