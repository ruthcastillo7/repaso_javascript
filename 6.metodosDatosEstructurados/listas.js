let lista=[]
lista[0]="manzana" //agregar elementos
lista[1]="pera"
console.log(lista.length)
console.log(lista)

//ejercicio 1: crear una lista vacia y agregar
// de manera automatica los numeros pares que existen entre 0 y 20

// forma 2
let ListaNumerosPares=[]
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        ListaNumerosPares[ListaNumerosPares.length]=i
    }
  }
  console.log(ListaNumerosPares);

// forma 3
let numPar=[]
let contador=0
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        numPar[contador]=i
        contador++
    }
  }
numPar


// Usando PUSH
let numerosPares=[]
for (let i = 1; i <= 20; i++) { // 2. Iterar a través de los números del 0 al 20
    if (i % 2 === 0) { // 3. Comprobar si el número es par usando el operador módulo (%)
      numerosPares.push(i); // 4. Si es par, añadirlo a la lista
    }
  } // Opcional: Mostrar la lista de números pares
  console.log(numerosPares);

// Ejercicio UNSHIFT y PUSH
let amigos=["e","i","o"]
amigos.unshift("a")
amigos.push("u")
console.log(amigos);

// POP
let frutas=['🍎','🍍','🍉','🍐','🍌','🍒']
let cerecita=frutas.pop()
cerecita
frutas.pop() // ['🍎','🍍','🍉','🍐','🍌']
frutas.pop() // ['🍎','🍍','🍉','🍐']
frutas.pop() // ['🍎','🍍','🍉']
frutas.pop() // ['🍎','🍍']
frutas.pop() // ['🍎]
frutas

// SHIFT
let frutasDos=['🍎','🍍','🍉','🍐','🍌','🍒']
frutasDos.shift() // se lo queda para él, primer elemento
frutasDos.pop() // se lo queda para él, el ultimo elemento
frutasDos

// DELETE
let texto=["hola","como"," ","estas"]
delete texto[2]
texto

//SPLICE
let vocal=["a","e","i","o","u"]
vocal.splice(3,2)
vocal

// CONCAT
let amigosPrimaria=['alfredo','luis','edgar']
let amigosSecundaria=['edison','remy','miguel']
let amigosSuperios=['josue','marlon','handy']
let friends=amigosPrimaria.concat(amigosSecundaria,amigosSuperios)
friends

// FIND
let amigos2=['alfredo','luis','edgar']
amigos2.find(el=>{el=='alfredo'})
amigos2

// FILTER
let numeros=[5,6,10,2,0,-14,20,50,9,11]
let numerosMenores=numeros.filter(num=>num<11)
console.log(numerosMenores)

// forEach
let numeros3=[1,2,3,4,5,6]
numeros3.forEach(n=>{console.log()})
////// esta es una funcion anonima de tipoflecha :
////// conts miFuncion=a=>{}
numeros3.forEach(n=>{console.log(n+1)})
////////// todos los numeros elevados a la potencia de 2
numeros3.forEach(n=>{console.log(n**2)})

// Map
let number=[1,2,3,4,5,6]
newNumber=number.map(n=>{return n+1})
console.log(newNumber)

// INCLUDES
let vocales2=["a","i","o","u"]
let buscaE=vocales2.includes("e")
console.log(buscaE)
let buscaA=vocales2.includes("a")
console.log(buscaA)

let fruits=["pera","higo","tomato"]
let estaPera=fruits.includes("pera")
console.log(estaPera)
let estaNaranka=fruits.includes("naranja")
console.log(estaNaranka)

// FILTER
let listaNumber=[10,11,3,20,5]
// deseo una lista con los numeros que sea mayores a 10
let mayorDiez=listaNumber.filter(n=>{return n>10})
console.log(mayorDiez)
// de una lista de numero del 1 a 10 usando filter eliminar el numero 1
let unoAlDiez=[1,2,3,4,5,6,7,8,9,10]
let listaSinUno=unoAlDiez.filter(n=>{return n!=1})
console.log(listaSinUno)

// 