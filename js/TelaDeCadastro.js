const btnCadastrar = document.getElementById("btnCadastrar")
const telaDeCadastro = document.getElementById("telaDeCadastro")
const fecharTelaDeCadastro = document.getElementById("fecharTelaDeCadastro")
const inputsCadastro = document.querySelectorAll(".inputCadastro")

//Remove tela de login e mostra tela de cadastro
btnCadastrar.addEventListener("click", () => {
    adicionarFundoDesfocado()
    telaDeLogin.classList.add("hidden")
    telaDeCadastro.classList.remove("hidden")
})

//Remove tela de cadastro ao clicar no botão "X"
fecharTelaDeCadastro.addEventListener("click", () => {
    telaDeCadastro.classList.add("hidden")
    removerFundoDesfocado()
    resetaValorDosInputs(inputsCadastro)
})

