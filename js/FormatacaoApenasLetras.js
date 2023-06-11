const cadastroNomeCompleto = document.getElementById("cadastroNomeCompleto")
const cadastroBairro = document.getElementById("cadastroBairro")
const cadastroCidade = document.getElementById("cadastroCidade")

function apenasLetras(input) {
    input.addEventListener('input', function (event) {
        const value = event.target.value;

        event.target.value = value.replace(/[^a-zA-ZÀ-ÿ ]/gu, '');
    });
}

apenasLetras(cadastroNomeCompleto)
apenasLetras(cadastroBairro)
apenasLetras(cadastroCidade)