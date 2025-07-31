// quiero que un mensaje se repita 10 veces
var contador = 0;
while (contador<10){
    console.log ("estoy en la vuelta numero: " + contador)
    contador=contador+1; //contador++; //contador de parada, hacen lo mismo
}

// declarar variable "contador" inicializada en 0 : var contador = 0;
// mientras mi contador sea menor 10 : while (contador<10)
// si cuento desde 0 siempre es menor (<) a la cantidad de veces que quiero alcanzar
// si contamos desde "1" entonces si usariamos menor o igual : <=
// abro y cierro estructura repetitiva "{}", console.log("mensaje que quiero mostrar")
// concateno con "+ contador".
// condicion de parada "contador++" (para evitar bucle infinito):  hago que mi contador incremente 1