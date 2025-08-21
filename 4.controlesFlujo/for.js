// mostrar 10 veces el numero de cuenta que va

// declarar variable con VAR   en este caso "i" de indice =0  i=0
// por convencion arranca en 0
// Iniciación de la variable: separado por ";" la condicion  i<10
// Condición de fin del ciclo: la condicion de parada, si arranca en 0 uso "menor que  <",  y si fuera 1 arranca "menor igual que <="
// Modificación de la variable: i++
//incremento ++  y decremento --
// y concatenamos "mensaje" con la "i" = +i
for (var i=0;i<10;i++) {
    console.log("vuelta numero " + i)
}


//forma del profe
/*
sintaxys de for
primero el keyword (palabra resiervada), condicion, cuerpo (son llaves {} - la condicion se ejecuta cuando se cumpla la condicion)
partes de la condicion -> espresion inicial, condicion, exprecion final (corta el bucle)
si no existe expresion final, el for sera infinito.
*/
// suma normal inicial=inicial+1
// incremento inicial++
// inicial+=1

for (let inicial=1;inicial<=10;inicial++){
    console.log("hola")
}

// for es usado para acceder o recorrer (iterar) los elementos de una lista o diccionario
// quiero saber el ultimo elemento
let amigos=["alex", "ruth", "jose ma", "william"]
console.log(amigos)
console.log(amigos[3])
// existe un metodo para saber la antodad de elementos que tiene una lista length y restarle 1
console.log(amigos[amigos.length - 1])

// ejercicio: recorrer o iterar la lista de amigos con for
for (let i=0;i<=3;i++){
    console.log(amigos[i])
}
// cuandono se la cantidada de indices tengo
for (let i=0;i<amigos.length;i++){
    console.log(amigos[i])
}


let frutas=["🍎","🍍","🍉","🍐","🍌","🍒"]
// console.log(frutas[frutas.length -3])
// console.log(frutas[frutas.length -2])
// console.log(frutas[frutas.length -1])
for (let i=frutas.length-3;i<frutas.length;i++){
    console.log(frutas[i])
}

console.log(frutas[0])
console.log(frutas[frutas.length -3])
console.log(frutas[frutas.length -1])
// 
for (let i=0;i<frutas.length;i++){
    if (frutas[i]== "🍎" || frutas[i]=="🍐" || frutas[i+0]=="🍒")
    console.log(frutas[i])
}