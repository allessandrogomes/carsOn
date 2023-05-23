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

    var inputAnoDe = document.getElementById("inputAnoDe").value
    var inputAnoAte = document.getElementById("inputAnoAte").value
    var inputPrecoDe = document.getElementById("inputPrecoDe").value.replace(/\./g, "")
    var inputPrecoAte = document.getElementById("inputPrecoAte").value.replace(/\./g, "")

    var carrosFiltrados = cardsCarros.filter(function(carro) {
        return  (estadosSelecionados.length === 0 || estadosSelecionados.includes(carro.estado)) &&
                (coresSelecionadas.length === 0 || coresSelecionadas.includes(carro.cor)) &&
                (marcasSelecionadas.length === 0 || marcasSelecionadas.includes(carro.marca)) &&
                (inputAnoDe.length === 0 || inputAnoDe <= carro.ano) &&
                (inputAnoAte.length === 0 || inputAnoAte >= carro.ano || inputAnoAte == 0) &&
                (inputPrecoDe.length === 0 || inputPrecoDe <= carro.preco) &&
                (inputPrecoAte.length === 0 || inputPrecoAte >= carro.preco || inputPrecoAte == 0)
    })

    if (carrosFiltrados.length > 0) {
        exibirOsCarros(carrosFiltrados)
    } else {
        sessaoCarros.innerHTML = ''
        sessaoCarros.innerHTML += `<h3>Não existe nenhum veículo dentre os filtros selecionados.<h3>`
    }
}