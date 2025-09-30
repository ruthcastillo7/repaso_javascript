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