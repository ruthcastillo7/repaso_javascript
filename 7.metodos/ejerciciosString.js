/*
1. crear un programa, haciendo uso de una funcion un contador
de vocales.
La funcion debera recibir un texto y la vocal a buscar y
retorna la cantidad de veces que se encuentra dicha vocal.
Hacer uso de los metodos para string.
*/
function countVocals(texto,vocal){
    let newTexto=texto.toLowerCase()
    let newVocal=vocal.toLowerCase()
    let cantidadVocales=0
    for(let i=0;i<texto.length;i++){
        if (texto[i]==vocal){
            cantidadVocales+=1
        }
    }
    return cantidadVocales
}
//llamar a la funciones hacer esto : countVocals(texto,vocal) 
let miTexto="mi mama me ama yo amo a mi mama"
let searchVocal="o"
console.log(countVocals(miTexto,searchVocal))


let otroTexto="hola como estas"
let vo="o"

const contarVocales=(txt,v) => {
    return txt.toLowerCase().split(v.toLowerCase()).length-1
}
console.log(contarVocales(otroTexto,vo))
// line 29 - FACTORIZAR: primero convierto a minusculas, luego devuelve listas
// y luego contar la cantidad de vocales

// AVERIGUAR: expresiones regulares: son simbolos que permiten comparar si un texto
//contiene los caracteres que se pieden
// Las expresiones regulares son patrones que se utilizan para hacer coincidir combinaciones
//  de caracteres en cadenas. En JavaScript, las expresiones regulares también son objetos.
//   Estos patrones se utilizan con los métodos exec() y test() de RegExp, y con match(),
//    matchAll(), replace(), replaceAll(), search() y split() métodos de String. 


/*
2. crear un programa que haciendo uso de una funcion pueda 
recibir una lista de amigos y que retorne otra lista pero con
los nombres en mayuscula.
*/
function textoMayuscula (lista){
    let nuevaLista=[]
    for(let i=0;i<lista.length;i++){
        nuevaLista[i]=lista[i].toUpperCase()
    }
    return nuevaLista
}
let amigos=["flor","percy", "profe"]
console.log(textoMayuscula(amigos))