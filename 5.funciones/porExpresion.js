//ejemplo 1: parametros vacios
const saludo = function saludar() {return "Hola"};
console.log(saludo());

//ejemplo 2
 const foo = function* () {
  yield "a";
  yield "b";
  yield "c";
};
let str = "";
for (const val of foo()) {
  str = str + val;
}
console.log(str);

//11/09/25
// las funciones por exprecion se almacenan en una variable
let suma=function(a,b){
  return a+b
}
console.log(suma(23,45))

