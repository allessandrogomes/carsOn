const divsBtnsFiltros = document.querySelectorAll('.borda')
btnsFiltrosBorda()

function btnsFiltrosBorda() {
    divsBtnsFiltros.forEach((divBtnFiltro) => {
        divBtnFiltro.addEventListener('click', () => {
            divBtnFiltro.classList.toggle('border-2')
            filtrarCarros()
        })
    })
}
