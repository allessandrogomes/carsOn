var botaoAnunciar = document.getElementById("botaoAnunciar")
var fundoDesfocado = document.getElementById("fundoDesfocado")
var telaDeAnuncio = document.getElementById("telaDeAnuncio")
//Mostra a tela de anunciar ao clicar
botaoAnunciar.addEventListener("click", () => {
    fundoDesfocado.classList.remove("hidden")
    telaDeAnuncio.classList.remove("hidden")
})

var botaoFecharTelaDeAnuncio = document.getElementById("fecharTelaDeAnuncio")
//Remove a tela de Anunciar ao clicar no "X"
botaoFecharTelaDeAnuncio.addEventListener("click", () => {
    fundoDesfocado.classList.add("hidden")
    telaDeAnuncio.classList.add("hidden")
})

//Remove tela de Anuncio e mostra tela de Anuncio publicado com sucesso
btnAnunciarNovoCarro.addEventListener("click", () => {
    telaDeAnuncio.classList.add("hidden")
    telaAnuncioPublicado.classList.remove("hidden")
})

const botaoAnunciarOk = document.getElementById("btnAnunciarOk")
const telaAnuncioPublicado = document.getElementById("telaAnuncioPublicado")
//Remove a tela de Anuncio Publicado ao clicar no Ok
botaoAnunciarOk.addEventListener("click", () => {
    telaAnuncioPublicado.classList.add("hidden")
    fundoDesfocado.classList.add("hidden")
})