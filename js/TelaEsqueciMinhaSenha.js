const btnFecharTelaEsqueciMinhaSenha = document.getElementById("fecharTelaEsqueciMinhaSenha")
const telaEsqueciMinhaSenha = document.getElementById("telaEsqueciMinhaSenha")
const btnEsqueciMinhaSenha = document.getElementById("btnEsqueciMinhaSenha")

btnEsqueciMinhaSenha.addEventListener("click", () => {
    adicionarFundoDesfocado()
    telaEsqueciMinhaSenha.classList.remove("hidden")
    telaDeLogin.classList.add("hidden")
})

// Remove tela Esqueci Minha Senha ao clicar no botão "X"
btnFecharTelaEsqueciMinhaSenha.addEventListener("click", () => {
    removerFundoDesfocado()
    telaEsqueciMinhaSenha.classList.add("hidden")
})
