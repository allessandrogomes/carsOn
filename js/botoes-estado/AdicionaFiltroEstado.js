const localASerInseridoOFiltro = document.getElementById('btnFiltroSessao')
const btnsEstado = document.querySelectorAll('.btnEstado')
const estadosFiltrados = []

btnsEstado.forEach((btnEstado) => {
    btnEstado.addEventListener('click', () => {
        const estadoClicado = btnEstado.querySelector('.btnEstadoValor').innerHTML
        const divsComEstado = document.querySelectorAll(`.btnFiltroFilho .valorFiltro`)
        let divRemovida

        for (let i = 0; i < divsComEstado.length; i++) {
            const div = divsComEstado[i].parentNode
            if (div.querySelector('.valorFiltro').innerHTML === estadoClicado) {
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
                <p class="valorFiltro uppercase w-3/4 pl-2.5">${estadoClicado}</p>
                <button class="btnRemoverFiltro w-1/4 pb-2" data-btnRemove="sp"><img src="./img/filtros/btn-remover.svg" alt=""></button>
            </div>
            `

            // adicionar o estado à lista
            estadosFiltrados.push(estadoClicado)
        }
        const btnsRemoverFiltro = document.querySelectorAll('.btnRemoverFiltro')
        removerFiltroPeloX()
    })
})
