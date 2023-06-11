const inputsAnunciarNovoCarro = document.querySelectorAll(".informacaoCarro")


const btnAnunciarNovoCarro = document.getElementById("btnAnunciarNovoCarro")
resetaValorDosInputs(inputsAnunciarNovoCarro)

btnAnunciarNovoCarro.addEventListener("click", () => {
    var carroASerAdicionadoObj = {}
    var inputVazio = false
    //Guarda os valores dos inputs no objeto carroASerAdicionado
    inputsAnunciarNovoCarro.forEach((input) => {
        let inputForm = input
        let valorLowerCase = inputForm.value.toLowerCase()
        if (!valorLowerCase > 0) {
            inputVazio = true
        }
        if (inputForm.id == "preco") {
            carroASerAdicionadoObj[inputForm.id] = parseInt(valorLowerCase.replace(/\D/g, ""))
        } else {
            carroASerAdicionadoObj[inputForm.id] = valorLowerCase
        }
    })

    //Verifica se todos os dados do veículo foram preenchidos antes de mostrar
    if (!inputVazio) {
        cardsCarros.push(carroASerAdicionadoObj)
        exibirOsCarros(cardsCarros)
        mostraTelaDeAnuncioPublicado()
    }
})
