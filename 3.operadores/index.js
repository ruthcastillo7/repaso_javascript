// operadores unarios
// operadores de negacion
// operador esta en la izquierda del valor
// y como resultado obtenemos otro valor
let negacion=!false //solo con valores boleanos
//EXPRECION: es un valor complejo que sera solucionado y nos retornara un nuevo resultado o valor
console.log(negacion)

//operadores binarios
// son los que evaluan dos valores y nos dan como resultado un nuevo valor
// todos los operadores son EXPRECIONES
let suma=34+20
let resta=4-2
let producto=4*5
let divicion=3/3
let potencia=3**2
let residuo=10%3 //modulo
console.log(residuo)

//TAREA: ejemplos de operadores de comparacion
// evalua el valor de las variables
a = 5;
b = 5;
console.log(a==b)
// estrictamente igual
a = 5;
b = 10;
console.log(a===b)
// diferente que
// si se da el caso de que ambas variables tienen el valor igual entonces sera FALSE ya que no hay residuo
a = 5;
b = 10;
console.log(a!=b)
// estrictamente iguales
c = 5;
d = "5";
console.log(c!==d)
// mayor que
a = 5;
b = 6;
console.log(a<b)
// menor que
a = 5;
b = 6;
console.log(a>b)
// mayor o igual que
a = 5;
b = 6;
console.log(a<=b)
console.log(a>=b)

//Operadores logicos
// and &&: se deben cumplir ambas condiciones
var edad = 18;
var dni = true;
console.log (edad >= 18 && dni==true)
// or ||: se debe cumplir una condicion u otra
var edad1 = 18;
var dni1 = false;
console.log (edad1 >= 18 || dni1==true)
// not !: cambia el valor de una variable (si es true pasa a false y viceversa)
var edad2 = 18;
var dni2 = !false;
console.log(dni)


//Operadores ternarios (condicional)
//1. el primer valor debe ser un valor boleano
//2. el segundo valor se mostrara si el primer valor es verdad
//3. el tercer valor se mostrara si el segundo valor es falso
let ternario=true?"verdadero":"falso" //los dos puntos separan los mensajes de respuesta
console.log(ternario)

let edad4=17
let ternario1=edad4>18?"eres mayor de edad":"eres menor"
console.log(ternario1)
