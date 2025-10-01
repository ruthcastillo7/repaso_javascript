let objeto={}
//// 🧐:si es que esta clave no exite lo creara, pero si
//// el nombre de la clave si existe entonces actalizara
//// o reescribira el valor

// normal
objeto ["nombre1"]="ruth"
console.log(objeto.nombre1)
console.log(objeto["nombre1"])
// reescrito
objeto ["nombre2"]="flor"
objeto ["nombre2"]="jose"
console.log(objeto.nombre2)
console.log(objeto["nombre2"])
// sin valor
objeto ["nombre3"]=""
console.log(objeto.nombre3)
console.log(objeto["nombre3"])


objeto ["nombre"]="ruth"
objeto ["nombre"]="jose"
objeto ["edad"]=20
// notacion de tipo punto
console.log(objeto.nombre)
// notacion de tipo llaves (para crear)
console.log(objeto["nombre"])
console.log(objeto)
delete objeto.edad
console.log(objeto)

// for (n in objeto){
//     console.log(objeto[])
// }