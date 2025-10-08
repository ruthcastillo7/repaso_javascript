let titulo=document.querySelector("h1")
let primerTitulo=titulo.textContent
titulo.textContent="Otro titulo"
console.log(primerTitulo)
let contenido=document.querySelector("#contenido")
contenido.innerHTML=`
<p>${primerTitulo}</p>
`