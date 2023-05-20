
/*Funciones para el formulario*/
const input = document.querySelectorAll(".input") /*Creo una arreglo que obtenga la clase input*/

function focusFunc(){/*Creo la funcion focusFunc, cuando el input tiene el focus seleccionamos la clase input-container donde se encuentra el label*/
    let parent = this.parentNode
    parent.classList.add("focus")
}
function blurFocus(){/*Analogo al de focus solo que cada vez que deja de estar activado lo remueve. el if es para que si hay texto se quede activado*/
    let parent = this.parentNode
    if(this.value==""){
    parent.classList.remove("focus")
    }
}

input.forEach( input =>{/*Cada vez que se active focus, activa la funcion focusFunc*/
    input.addEventListener("focus", focusFunc)
    input.addEventListener("blur", blurFocus)
})