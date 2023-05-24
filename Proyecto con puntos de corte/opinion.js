const { createApp } = Vue
const miApp = createApp({
    data() {
        return {
            opinionActuales: "",
            opinionesHechas: 0,
            opinionUsuario: ""
        }
    },

    methods: {
        mostrarDatosdeAPI() {
            fetch('https://randomuser.me/api')
                .then(datos => datos.json())
                .then(datos => {
                    this.opinionActuales +=
                        `<div class="seccionOp">
                    <img src="${datos.results[0].picture.large}"></img>
                    <button class="botonopiniones" onclick="opinionUser1(${this.opinionesHechas})">ver opinion<button>
                    <h1>${datos.results[0].name.first}</h1><br>
                    <h3>${datos.results[0].login.username}</h3><br>
                    <h4>Usuario</h4></div>`
                    this.opinionesHechas++
                })
        },
        colgarOpinion(){
            let opinion = document.getElementById("input").value
            let nombre  = document.getElementById("nombre").value
            let usuario = document.getElementById("usuario").value
            if(opinion.length >150){
                alert("Superaste el limite de caracteres permitidos. Haz una opinion mas corta.")
                return false
            } else{
                this.opinionUsuario +=
                `<div class="seccionOp">
                <button class="botonopiniones" onclick="opinionUser0()">Ver Opinion<button>
                <h1>${nombre}</h1><br>
                <h3>${usuario}</h3><br>
                <h4>usuario</h4></div>`
                this.opinionesHechas++
            }
        }                
    }

})
miApp.mount('#opinion-app')

function opinionUser0(){
    let opinion = document.getElementById("input").value
    console.log(opinion)
}
function opinionUsser1(valor){
    if(valor % 2 === 0){
        return console.log("opinion par")
    } else{
        return console.log("opinion impar")
    }
}

