let numeros=[3,4,7,8,5,4]
let [a,b]=numeros

let [,c,,d]=numeros

let [h,...rest]=numeros // REST: crea una copia
rest


let alumno={
    "nombre":"rony",
    "edad":20
}
alumno["dni"]=23548976 // forma normal
// SPREAD operation (permite convertir texto a lista)
//// los 3 puntos "..." copian los elementos, solo se ponen 3
let actualizaAlumno={"id":1,...alumno,"t_sangre":"b+"}
actualizaAlumno

// quiero mostrar solo el tipo de sangre
let {nombre,t_sangre}=actualizaAlumno
nombre
t_sangre

// quiero renombrar t_sangre a blood,eso se puede haacer con dos puntos ":"
//// let {nombre,t_sangre:blood}=actualizaAlumno
//// t_sangre

// forma 1: agregar con el operador spread las letras faltantes de las vocales
let vocales=["a","e"]
let todasVocales=[...vocales,"i","o","u"]
todasVocales
// forma 2: combinando dos listas
let vocalesFaltantes=["i","o","u"]
let unirVocales=[...vocales,...vocalesFaltantes]
unirVocales
// forma 3: desestructurar y copiar
let [firtVocals,secondsVocals]=["a","e"]
let vocalesCompletas=[firtVocals,secondsVocals,"i","o","u"]
vocalesCompletas

// que spread funcione como split
let texto="hola como estan alumnos"
let nuevaLista=[...texto]
nuevaLista