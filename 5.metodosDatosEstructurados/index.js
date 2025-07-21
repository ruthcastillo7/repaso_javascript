//EJEMPLO: Array de frutas
let frutas=["naranja","banana"];

//PUSH: agrego al final
frutas.push("manzana");
//console.log(frutas);
/// ["naranja","banana","manzana"]

//UNSHIFT: agrego al inicio
frutas.unshift("sandia");
//console.log(frutas);
/// ["sandia","naranja","banana","manzana"]

//POP: elimina ultimo elemento
frutas.pop();
//console.log(frutas);
/// ["naranja","banana"]

//SHIFT: elimina primer elemento
frutas.shift();
//console.log(frutas);
/// ["banana","manzana"]

//FILTER: filtra segun condicion
let frutasD=["naranja","banana","kiwi"];
let frutasConA = frutasD.filter(fruta => fruta.includes("a"));
//console.log(frutasConA);
// ["naranja","banana"]


//CONCAT: une 2 listas
let frutas1=["sandia","naranja","banana"];
let frutas2=["manzana","kiwi"];
let todasLasFrutas = frutas1.concat(frutas2);
//console.log(todasLasFrutas);
// ["sandia","naranja","banana","manzana","kiwi"]

//REVERSE: une 2 listas al reves
todasLasFrutas.reverse();
//console.log(todasLasFrutas);
// ["manzana","kiwi","sandia","naranja","banana"]

//SORT: ordena ascendentemente o alfabeticamente
todasLasFrutas.sort();
console.log(todasLasFrutas);
// ["banana","kiwi","manzana","naranja","sandia"]