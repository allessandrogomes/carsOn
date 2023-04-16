const btnsFiltroCor = document.querySelectorAll('.filtroCorBtn')
const coresFiltradas = []

btnsFiltroCor.forEach((btnFiltroCor) => {
    btnFiltroCor.addEventListener('click', () => {
        const corClicada = btnFiltroCor.querySelector('.filtroCorBtnValor').innerHTML
        const divsComCor = document.querySelectorAll(`.btnFiltroFilho .filtroCor`)
        let divRemovida

        for (let i = 0; i < divsComCor.length; i++) {
            const div = divsComCor[i].parentNode
            if (div.querySelector('.filtroCor').innerHTML === corClicada) {
                divRemovida = div
                break
            }
        }

        if (divRemovida) {
            // o cor já está na lista, remover a div correspondente
            divRemovida.remove()

            // remover o cor da lista
            coresFiltradas.splice(coresFiltradas.indexOf(corClicada), 1)
        } else {
            // o cor não está na lista, adicionar a div correspondente
            localASerInseridoOFiltro.innerHTML += `
            <div class="btnFiltroFilho flex mb-2 mr-2 justify-center w-36 h-10 bg-white text-center pt-2 rounded-full shadow-md">
                <p class="filtroCor uppercase w-3/4 pl-2.5">${corClicada}</p>
                <button class="btnRemoverFiltro w-1/4 pb-2" data-btnRemove="sp"><img src="./img/filtros/btn-remover.svg" alt=""></button>
            </div>
            `

            // adicionar o cor à lista
            coresFiltradas.push(corClicada)
            
        }
        const btnsRemoverFiltro = document.querySelectorAll('.btnRemoverFiltro')
        removerFiltroPeloX()
    })
})