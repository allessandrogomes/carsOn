function removerFiltroPeloX() {
    const btnsRemoverFiltro = document.querySelectorAll('.btnRemoverFiltro')
    btnsRemoverFiltro.forEach((btnRemoverFiltro) => {
        btnRemoverFiltro.addEventListener('click', (e) => {
            const divPai = btnRemoverFiltro.parentElement
            const valorDoXClicado = divPai.querySelector('p').innerHTML
            divsBtnsFiltros.forEach((divBtnFiltro) => {
                const divBtnFiltroValor = divBtnFiltro.querySelector('h5').innerHTML
                if (divBtnFiltroValor == valorDoXClicado) {
                    divBtnFiltro.classList.remove("border-2")
                }
            })
            const filtro = e.target.parentElement.parentElement;
            filtro.remove();
            filtrarCarros()
        });
    });
}
