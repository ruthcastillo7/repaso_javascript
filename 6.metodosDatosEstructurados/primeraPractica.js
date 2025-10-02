// crear una lista de objetos de 5 vehiculos que tengan informacion
// como: marca, modelo, año de fabricacion, precio, numero de placa
let vehiculos=[
    {"marca":"toyota","modelo":"cuv","añoFabricacion":2024,"precio":15000,"placa":360},
    {"marca":"mitsubishi","modelo":"van","añoFabricacion":2020,"precio":17000,"placa":999},
    {"marca":"kn","modelo":"micro","añoFabricacion":2025,"precio":18000,"placa":720},
    {"marca":"lexus","modelo":"truck","añoFabricacion":2025,"precio":30000,"placa":599},
    {"marca":"honda","modelo":"suv","añoFabricacion":2022,"precio":20000,"placa":202}
]

// crear funciones para cada uno de estas acciones
// 1. actualizar el valor de una de sus caracteristicas
const actualizar=vehiculos.map(el=>{
    el["placa"]=200
    return el
})
console.log(actualizar)

// 2. agregar un nuevo vehiculo
let nuevoVehiculo = {"marca":"kia","modelo":"seltos","añoFabricacion":2021,"precio":13000,"placa":104}
function agregaVehiculo(nuevoVehiculo){
    vehiculos.push(nuevoVehiculo);
}
console.log(vehiculos,"Vehiculo agregado:",nuevoVehiculo)

// 3. eliminar un vehiculo
delete vehiculos[0]
console.log(vehiculos)
// const elimina=function(){
// }

// 4. poder filtrar los vehiculo por su año de fabricacion
let vehiculosPorAñoFabricacion = vehiculos.filter(vehiculos => vehiculos.añoFabricacion >= 2025)
console.log(vehiculosPorAñoFabricacion)

// 5. poder filtrar un solo vehiculo por su numero de placa
let vehiculosPorNumeroPlaca = vehiculos.filter(vehiculos => vehiculos.placa === 200)
console.log(vehiculosPorNumeroPlaca)