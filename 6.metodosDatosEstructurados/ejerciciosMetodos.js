let datosAlumno={
    "nombre":"antonio",
    "apellido":"pampañaupa"
}
// agregar edad y genero
datosAlumno["edad"]=18
datosAlumno["genero"]="F"
console.log(datosAlumno)
// actualizar el apellido
datosAlumno["apellido"]="flores"
console.log(datosAlumno)
// eliminar sexo
delete datosAlumno.genero
console.log(datosAlumno)


let alumnos=[
    {"nombre":"ruth","edad":19,"CUI":60414454},
    {"nombre":"flor","edad":18,"CUI":30414454},
    {"nombre":"ashly","edad":19,"CUI":78114454}
]
// deseo mostrar una lista solode los menores a 19
let listaMenores=alumnos.filter(al=>al.edad<19) // con el "." se accede a la clave o sea al "nombre"
console.log(listaMenores)
// actualizar la lista de objetos y agregarle el genero femenino a todos
let listaActualizada=alumnos.map(el=>{
    el["genero"]="femenino" // el={"nombre":"ruth","edad":19,"CUI":60414454}
    return el
    //return {...el,"genero":"femenino"}
})
console.log(listaActualizada)

// de mi lista deseo mostrar a la persona que tenga
// como CUI : 60414454
let buscaCui=alumnos.find(el=>el.CUI == 60414454) // cuando solo ejecuto una accion obviamos las llaves
console.log(buscaCui)