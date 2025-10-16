// 1. funcion capturada
const buttonFuncExterna=document.querySelector("#funcion_externa")

// 2. a mi funcion externa quiero que escuche unevento click - para esto quitamos la pre ejecucion
buttonFuncExterna.addEventListener('click',funcionExterna)
// IMPORTANTE:  debe ir sin parentesis dentro "funcionExterna()" sino no se ejecuta

function funcionExterna(){
    alert("Estoy ejecutandome!!! desde unafuncion externa")
}

// escuchadorde eventos tiene dos parametros: 1. el evento que escichara y el 2. la funcion que va ejecutar
const buttonFuncCallback=document.querySelector("#funcion_callback")
buttonFuncCallback.addEventListener('click',()=>{
    alert("Estoy ejecutandome!!! desde una arrow funcion")
})