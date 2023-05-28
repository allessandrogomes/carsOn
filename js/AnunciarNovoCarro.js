const inputsAnunciarNovoCarro = document.querySelectorAll(".informacaoCarro")


const btnAnunciarNovoCarro = document.getElementById("btnAnunciarNovoCarro")
inputsAnunciarNovoCarro.forEach((input) => {
    input.value = ""
})
btnAnunciarNovoCarro.addEventListener("click", () => {
    var carroASerAdicionadoObj = {}
    //Guarda os valores dos inputs no objeto carroASerAdicionado
    inputsAnunciarNovoCarro.forEach((input) => {
        let inputForm = input
        let valorLowerCase = inputForm.value.toLowerCase()
        if (inputForm.id == "preco") {
            carroASerAdicionadoObj[inputForm.id] = parseInt(valorLowerCase.replace(/\D/g, ""))
        } else {
            carroASerAdicionadoObj[inputForm.id] = valorLowerCase
        }
        input.value = ""
    })
    cardsCarros.push(carroASerAdicionadoObj)
    exibirOsCarros(cardsCarros)
})