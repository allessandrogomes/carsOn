
function filtrarCarros() {
    const filtrosAtivosEstado = document.querySelectorAll('.valorFiltroEstado')
    var arrayFiltrosAtivosEstado = []
    filtrosAtivosEstado.forEach((filtroAtivoEstado) => {
        arrayFiltrosAtivosEstado.push(filtroAtivoEstado.innerHTML)
    })
    const filtrosAtivosCor = document.querySelectorAll('.valorFiltroCor')
    var arrayFiltrosAtivosCor = []
    filtrosAtivosCor.forEach((filtroAtivoCor) => {
        arrayFiltrosAtivosCor.push(filtroAtivoCor.innerHTML)
    })
    const filtrosAtivosMarca = document.querySelectorAll('.valorFiltroMarca')
    var arrayFiltrosAtivosMarca = []
    filtrosAtivosMarca.forEach((filtroAtivoMarca) => {
        arrayFiltrosAtivosMarca.push(filtroAtivoMarca.innerHTML)
    })

    var carrosFiltradosEstado = cardsCarros.filter(carro => arrayFiltrosAtivosEstado.some(filtro => carro.estado.includes(filtro)));
    var carrosFiltradosCor = cardsCarros.filter(carro => arrayFiltrosAtivosCor.some(filtro => carro.cor.includes(filtro)));
    var carrosFiltradosMarca = cardsCarros.filter(carro => arrayFiltrosAtivosMarca.some(filtro => carro.marca.includes(filtro)));
    var carrosFiltradoTeste = carrosFiltradosEstado.filter(carroEstado => {
        return carrosFiltradosCor.some(carroCor => carroEstado.nome === carroCor.nome);
      });
    exibirOsCarros(carrosFiltradoTeste)
}

// if(filtrosAtivos == '') {
//     exibirOsCarros(cardsCarros)
// } else if (carrosFiltradosCor == '') {
//     sessaoCarros.innerHTML = `
//         <h2>Não existe carro para esse filtro selecionado</h2>
//     `
// } else {
//     exibirOsCarros(carrosFiltradosCor)
// }


//var carrosFiltradosEstado = cardsCarros.filter(carro => filtrosAtivos.some(filtro => carro.estado.includes(filtro)));
