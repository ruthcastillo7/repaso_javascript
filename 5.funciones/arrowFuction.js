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