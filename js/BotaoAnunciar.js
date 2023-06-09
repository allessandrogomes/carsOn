//Mostra a tela de anunciar ao clicar
var botaoAnunciar = document.getElementById("botaoAnunciar")
var fundoDesfocado = document.getElementById("fundoDesfocado")
var telaDeAnuncio = document.getElementById("telaDeAnuncio")
botaoAnunciar.addEventListener("click", () => {
    adicionarFundoDesfocado()
    telaDeAnuncio.classList.remove("hidden")
    resetaValorDosInputs(inputsAnunciarNovoCarro)
})

//Remove a tela de Anunciar ao clicar no "X"
var botaoFecharTelaDeAnuncio = document.getElementById("fecharTelaDeAnuncio")
botaoFecharTelaDeAnuncio.addEventListener("click", () => {
    removerFundoDesfocado()
    telaDeAnuncio.classList.add("hidden")
})

//Remove a tela de Anunciar e mostra a tela de anuncio publicado
const telaAnuncioPublicado = document.getElementById("telaAnuncioPublicado")

//Remove a tela de Anuncio Publicado ao clicar no Ok
const botaoAnunciarOk = document.getElementById("btnAnunciarOk")
botaoAnunciarOk.addEventListener("click", () => {
    telaAnuncioPublicado.classList.add("hidden")
    fundoDesfocado.classList.add("hidden")
})

function adicionarFundoDesfocado() {
    fundoDesfocado.classList.remove("hidden")
}

function removerFundoDesfocado() {
    fundoDesfocado.classList.add("hidden")
}

function mostraTelaDeAnuncioPublicado() {
    telaDeAnuncio.classList.add("hidden")
    telaAnuncioPublicado.classList.remove("hidden")
}


