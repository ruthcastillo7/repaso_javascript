// 9/09/05
//el $ sirve para cuando usamos comillas invertidas agregamos una variable dentro de un texto
let frutas=['🍎','🍍','🍉','🍐','🍌','🍒']
if(frutas.length<=0){
    console.log("al menos debes tener 2 frutas a mas")
}else{
    let contador=0
    while(true){
        if('🍐'== frutas[contador]){
            console.log(`la 🍐 se encontro en la posicion ${contador}`)
            break
        }
        contador++
    }
}