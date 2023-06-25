const btnAbrirFiltrosMobile = document.querySelector("#btnAbrirFiltrosMobile")
const sectionFiltros = document.querySelector(".sectionFiltros")
const fundoDesfocadoFiltros = document.querySelector("#fundoDesfocadoFiltros")

btnAbrirFiltrosMobile.addEventListener("click", () => {
    sectionFiltros.classList.toggle("active")
    btnAbrirFiltrosMobile.classList.toggle("active")
    fundoDesfocadoFiltros.classList.toggle("hidden")
})