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
            <div class="btnFiltroFilho cor flex m-2 justify-around px-3 items-center w-40 h-10 bg-white rounded-full shadow-md">
                <p class="valorFiltro valorFiltroCor uppercase filtroCor text-center w-3/4">${corClicada}</p>
                <button class="btnRemoverFiltro" ><img src="./img/filtros/btn-remover.svg" alt=""></button>
            </div>
            `

            // adicionar o cor à lista
            coresFiltradas.push(corClicada)
            
        }
        const btnsRemoverFiltro = document.querySelectorAll('.btnRemoverFiltro')
        removerFiltroPeloX()
        filtrarCarros()
    })
})