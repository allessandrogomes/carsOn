const btnsFiltroMarca = document.querySelectorAll('.filtroMarca')
const marcasFiltradas = []

btnsFiltroMarca.forEach((btnFiltroMarca) => {
    btnFiltroMarca.addEventListener('click', () => {
        const marcaClicada = btnFiltroMarca.querySelector('h5').innerHTML
        const divsComMarca = document.querySelectorAll(`.btnFiltroFilho .filtroMarca`)
        let divRemovida

        for (let i = 0; i < divsComMarca.length; i++) {
            const div = divsComMarca[i].parentNode
            if (div.querySelector('.filtroMarca').innerHTML === marcaClicada) {
                divRemovida = div
                break
            }
        }

        if (divRemovida) {
            // o marca já está na lista, remover a div correspondente
            divRemovida.remove()

            // remover o marca da lista
            marcasFiltradas.splice(marcasFiltradas.indexOf(marcaClicada), 1)
        } else {
            // o marca não está na lista, adicionar a div correspondente
            localASerInseridoOFiltro.innerHTML += `
            <div class="btnFiltroFilho marca flex mb-2 mr-2 justify-center w-36 h-10 bg-white text-center pt-2 rounded-full shadow-md">
                <p class="filtroMarca uppercase w-3/4 pl-2.5">${marcaClicada}</p>
                <button class="btnRemoverFiltro w-1/4 pb-2" data-btnRemove="sp"><img src="./img/filtros/btn-remover.svg" alt=""></button>
            </div>
            `

            // adicionar a marca à lista
            marcasFiltradas.push(marcaClicada)
             
        }
        const btnsRemoverFiltro = document.querySelectorAll('.btnRemoverFiltro')
        removerFiltroPeloX()
    })
})