function filtrarCarros(filtrosAtivos) {
    const filtros = document.querySelectorAll('.valorFiltro');
    filtrosAtivos = [];
    filtros.forEach((filtro) => {
        filtrosAtivos.push(filtro.innerHTML);
    });
    console.log(filtrosAtivos);
    var carrosFiltrados = cardsCarros.filter(carro => filtrosAtivos.some(filtro => carro.estado.includes(filtro)));
    if(filtrosAtivos == '') {
        exibirOsCarros(cardsCarros)
    } else if (carrosFiltrados == '') {
        sessaoCarros.innerHTML = `
            <h2>Não existe carro para esse filtro selecionado</h2>
        `
    } else {
        exibirOsCarros(carrosFiltrados)
    }
}
