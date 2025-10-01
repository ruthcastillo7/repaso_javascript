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