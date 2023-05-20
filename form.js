//validacion del formulario
function validarFormulario(){
    //obtengo los valores de cada campo que el usuario lleno
    let nombre = document.getElementById("nombre").value.trim();
    let mail = doocument.getElementById("mail").value.trim();
    let tel = document.getElementById("tel").value.trim();
    let consulta = document.getElementById("consulta").value.trim();
    //el if me sirve para que si alguno de los campos esta vacio no se pueda mandar
    if(nombre === "" || mail === "" || tel === "" || consulta ===""){
        alert("Por favor, complete todos los campos para enviar la consulta.")
        return false
    }

    for(var i = 0; i < nombre.length; i++){
        let valorLetra = nombre.charCodeAt(i)
        if(!(valorLetra >= 65 && valorLetra <= 95) ||(valorLetra >= 97 && valorLetra <= 122) || (valorLetra=== 32)){
            alert("El nombre puede contener solamente caracteres alfabeticos")
            return false
        }
    }
    

}

/*Funciones css para el formulario*/
const input = document.querySelectorAll(".input") /*Creo una arreglo que obtenga todo de la clase input*/

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