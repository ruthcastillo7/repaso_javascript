// ejemplo 1
const normal = function () {
    return "Función tradicional";
  };
   
const flecha = () => {
    return "Función flecha";
  };

const funcion = () => "Función flecha."; // 0 parámetros: Devuelve "Función flecha"
const suma = (e) => e + 1; // 1 parámetro: Devuelve el valor de e + 1
const sumab = (a, b) => a + b; // 2 parámetros: Devuelve el valor de a + b

// ejemplo 2
const saludar = (nombre) => {
  const mensaje = `Hola, ${nombre}!`;
  return mensaje;
};

//es la nueva versionecma script6 para la creacionde funciones,
//el objetivo de esta funcion es FACILITAR LA CREACION DE FUNCION
//y que el codigo sea legible
// =>  : en basea la entrada devuelve esta salida
const suma1=()=>{return a+b}
console.log(suma1(23,45))

const saludoNombre=nombre=>{
  let mensaje=`hola, ${nombre}`
  return mensaje
}
console.log(saludoNombre("josema"))

const saludo=()=>{
  return "hola"
}
console.log(saludo())