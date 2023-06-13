const btnAbrirChat = document.getElementById("btnAbrirChat")
const telaChat = document.getElementById("telaChat")
const fecharTelaChat = document.getElementById("fecharTelaChat")

// Mostra o chat
btnAbrirChat.addEventListener("click", () => {
    telaChat.classList.toggle("hidden")
})

// Fecha o chat ao clicar no botão "X"
fecharTelaChat.addEventListener("click", () => {
    telaChat.classList.add("hidden")
})