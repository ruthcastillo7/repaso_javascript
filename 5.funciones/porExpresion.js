//ejemplo 1
const saludo = function saludar() {
    return "Hola";
  };
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