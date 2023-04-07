const btnsEstado = document.querySelectorAll('.btnEstado')

alteraCorBtnFiltroEstado()

function alteraCorBtnFiltroEstado() {
    btnsEstado.forEach((btnEstado) => {
        btnEstado.addEventListener('click', () => {
            if (btnEstado.classList.contains("text-zinc-400")) {
                btnEstado.classList.replace("text-zinc-400", "text-teal-400")
            } else {
                btnEstado.classList.replace("text-teal-400", "text-zinc-400")
            }
        })
    })
}
