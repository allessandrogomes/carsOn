function removerFiltroPeloX() {
    const btnsRemoverFiltro = document.querySelectorAll('.btnRemoverFiltro')
    btnsRemoverFiltro.forEach((btnRemoverFiltro) => {
        btnRemoverFiltro.addEventListener('click', (e) => {
            const filtro = e.target.parentElement.parentElement;
            filtro.remove();
        });
    });
}

function removerCorDoBotaoEstadoPeloX() {
    const btnsRemoverFiltro = document.querySelectorAll('.btnRemoverFiltro')
    btnsRemoverFiltro.forEach((btnRemoverFiltro) => {
        btnRemoverFiltro.addEventListener('click', () => {
            const divPai = btnRemoverFiltro.parentElement
            const p = divPai.querySelector('p')
            const estadoDoXClicado = p.innerHTML
            btnsEstado.forEach((btnEstado) => {
                const estado = btnEstado.innerHTML
                if (estado == estadoDoXClicado) {
                    if (btnEstado.classList.contains("text-zinc-400")) {
                        btnEstado.classList.replace("text-zinc-400", "text-teal-400")
                    } else {
                        btnEstado.classList.replace("text-teal-400", "text-zinc-400")
                    }
                }
            })
        })
    })
}

