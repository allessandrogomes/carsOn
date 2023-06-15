const inputMensagemChat = document.getElementById("inputMensagemChat")
const localAInserirMensagem = document.getElementById("chatMensagens")
const btnEnviarMensagemChat = document.getElementById("btnEnviarMensagemChat")

btnEnviarMensagemChat.addEventListener("click", function () {
    mensagemDoUsuario(inputMensagemChat.value)
})

inputMensagemChat.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault()
        mensagemDoUsuario(inputMensagemChat.value)
    }
})

function mensagemDoUsuario (mensagem) {
    mensagem = mensagem.trim()
    if (mensagem.length > 0) {
        localAInserirMensagem.innerHTML += `
        <div class="flex justify-end items-center m-2">
            <p class="font-archivo bg-color3 p-2 rounded break-all max-w-[250px]">${mensagem}</p>
            <img class="w-12% m-3" src="./img/chat/icon-user.png" alt="Ícone usuário bot">
        </div>
    `
    inputMensagemChat.value = ""
    localAInserirMensagem.scrollTop = localAInserirMensagem.scrollHeight
    } else {
        inputMensagemChat.value = ""
    }
}