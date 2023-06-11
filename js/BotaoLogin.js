const btnLogin = document.getElementById("botaoLogin")
const telaDeLogin = document.getElementById("telaEntrar")
const btnFecharTelaDeLogin = document.getElementById("fecharTelaDeLogin")

// Adiciona tela de login
btnLogin.addEventListener("click", () => {
    adicionarFundoDesfocado()
    telaDeLogin.classList.remove("hidden")
})

// Remove tela de login ao clicar no botão "X"
btnFecharTelaDeLogin.addEventListener("click", () => {
    removerFundoDesfocado()
    telaDeLogin.classList.add("hidden")
})

