const localASerInseridoOFiltro = document.getElementById('btnFiltroSessao')
const estadosFiltrados = []

btnsEstado.forEach((btnEstado) => {
    btnEstado.addEventListener('click', () => {
        const estadoClicado = btnEstado.innerHTML
        const divsComEstado = document.querySelectorAll(`.btnFiltroFilho .filtroEstado`)
        let divRemovida

        for (let i = 0; i < divsComEstado.length; i++) {
            const div = divsComEstado[i].parentNode
            if (div.querySelector('.filtroEstado').innerHTML === estadoClicado) {
                divRemovida = div
                break
            }
        }

        if (divRemovida) {
            // o estado já está na lista, remover a div correspondente
            divRemovida.remove()

            // remover o estado da lista
            estadosFiltrados.splice(estadosFiltrados.indexOf(estadoClicado), 1)
        } else {
            // o estado não está na lista, adicionar a div correspondente
            localASerInseridoOFiltro.innerHTML += `
            <div
                class="btnFiltroFilho flex mb-2 mr-2 justify-center w-36 h-10 bg-white text-center pt-2 rounded-full shadow-md">
                <p class="filtroEstado uppercase">${estadoClicado}</p>
                <button class="btnRemoverFiltro relative left-10 bottom-1" data-btnRemove="sp"><img src="./img/filtros/btn-remover.svg" alt=""></button>
            </div>
            `

            // adicionar o estado à lista
            estadosFiltrados.push(estadoClicado)
            const btnsRemoverFiltro = document.querySelectorAll('.btnRemoverFiltro')

            removerFiltroPeloX()
            removerCorDoBotaoEstadoPeloX()
        }
    })
})
