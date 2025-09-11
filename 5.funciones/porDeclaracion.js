function saludo(){
    let saludo="hola mundo"
    return promedio
}

function promedioNotas(N1,N2,N3,N4){
    let suma=N1+N2+N3+N4
    let promedio=suma/4
    return promedio
}
console.log(promedioNotas(14,16,18,13))

console.log(promedioNotas(N1=14,N2=16,N3=18,N4=13))

// 11/09/25
// crear funciones para el manejo de operadores ariteticos
// let numeroUno=34
// let numeroDos=37
// let suma=numeroUno+numeroDos
// console.log(suma)

// let numeroUno1=36
// let numeroDos2=67
// let suma2=numeroUno1+numeroDos2
// console.log(suma2)

//funcion por declaracion
function sumaDeDosNumeros(a,b){
    return a+b
}

//llamada de function con argumentos posicionales
console.log(sumaDeDosNumeros(34,37))
console.log(sumaDeDosNumeros(36,67))
//llamada de function con argumentos nominales
console.log(sumaDeDosNumeros(b=56, a=45))