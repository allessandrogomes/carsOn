var inputPesquisa = document.getElementById("barraDePesquisa")
var inputValor = document.getElementById("barraDePesquisa").value;
function mostrarSugestoes() {
    var listaDeSugestao = document.getElementById("listaDeSugestao");

    var modelosDosCarros = []

    cardsCarros.forEach((carro) => {
        modelosDosCarros.push(carro.nome.toUpperCase())
    })

    listaDeSugestao.innerHTML = "";

    for (var i = 0; i < modelosDosCarros.length; i++) {
        if (modelosDosCarros[i].toLowerCase().includes(inputPesquisa.value.toLowerCase())) {
            var listaDeItens = document.createElement("li");

            listaDeItens.classList.add("itemSugestao", "w-10/12", "ml-5", "bg-white", "p-3", "border", "border-teal-500", "text-teal-500", "relative", "cursor-pointer")

            listaDeItens.appendChild(document.createTextNode(modelosDosCarros[i]));

            listaDeSugestao.appendChild(listaDeItens);
        }
    }
    //Insere o valor do item da lista no valor do input
    var listaDeItensSugestao = document.querySelectorAll(".itemSugestao")
    listaDeItensSugestao.forEach((itemSugestao) => {
        itemSugestao.addEventListener("click", () => {
            inputPesquisa.value = itemSugestao.innerHTML
        })
    })
    //Remove lista de sugestão ao clicar fora do input de pesquisa
    document.addEventListener("click", (evento) => {
        if (evento.target !== inputPesquisa) {
            var itemsParaRemover = document.querySelectorAll("li.itemSugestao")
            itemsParaRemover.forEach((item) => {
                item.remove()
            })
        }
    })
}

// Pesquisa carros pelo nome e mostra na tela
const lupaDePesquisa = document.getElementById("lupaDePesquisa")

lupaDePesquisa.addEventListener("click", () => {
    var carrosPesquisados = cardsCarros.filter(function (carro) {
        return (inputPesquisa.value.length === 0 || inputPesquisa.value.toLowerCase().includes(carro.nome))
    })
    if (carrosPesquisados.length > 0) {
        exibirOsCarros(carrosPesquisados)
    } else {
        sessaoCarros.innerHTML = ''
        sessaoCarros.innerHTML += `<h3>Não existe nenhum veículo <span class="font-bold">${inputPesquisa.value}</span>.<h3>`
    }
})


