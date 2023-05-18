function filtrarCarros() {
    var estadosSelecionados = [];
    btnsEstado.forEach((btnEstado) => {
        if (btnEstado.classList.contains('border-2')) {
            estadosSelecionados.push(btnEstado.querySelector('h5').innerHTML)    
        }
    })
    var coresSelecionadas = [];
    btnsFiltroCor.forEach((btnCor) => {
        if (btnCor.classList.contains('border-2')) {
            coresSelecionadas.push(btnCor.querySelector('h5').innerHTML)    
        }
    })
    var marcasSelecionadas = [];
    btnsFiltroMarca.forEach((btnMarca) => {
        if (btnMarca.classList.contains('border-2')) {
            marcasSelecionadas.push(btnMarca.querySelector('h5').innerHTML)    
        }
    })
    
    var carrosFiltrados = cardsCarros.filter(function(carro) {
        return  (estadosSelecionados.length === 0 || estadosSelecionados.includes(carro.estado)) &&
                (coresSelecionadas.length === 0 || coresSelecionadas.includes(carro.cor)) &&
                (marcasSelecionadas.length === 0 || marcasSelecionadas.includes(carro.marca));
    })

    if (carrosFiltrados.length > 0) {
        exibirOsCarros(carrosFiltrados)
    } else {
        sessaoCarros.innerHTML = ''
        sessaoCarros.innerHTML += `<h3>Não existe nenhum veículo dentre os filtros selecionados.<h3>`
    }
}