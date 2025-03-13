const relogio = document.querySelector("#relogio")
const iniciar = document.querySelector("#iniciar")
const parar = document.querySelector("#parar")
const zerar = document.querySelector("#zerar")
let segundos = 0;

function mostraHora(){
    let objDate = new Date(segundos * 1000)
    return objDate.toLocaleTimeString("pt-BR", {
        hour12: false,
        timeZone: "utc"
    })
}

function IniciaRelogio(){
    timer = setInterval(function(){
        segundos++ 
        relogio.innerHTML = mostraHora(segundos);
        }, 1000)
}

iniciar.addEventListener("click", () =>{
    IniciaRelogio()
})
parar.addEventListener("click", () => {
    clearInterval(timer)
})

zerar.addEventListener("click", () => {
    clearInterval(timer)
    relogio.innerHTML = "00:00:00"
})
