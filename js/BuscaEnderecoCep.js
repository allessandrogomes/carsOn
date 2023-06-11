async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erroCep');
    mensagemErro.innerHTML = "";
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }
        var cidade = document.getElementById('cadastroCidade');
        var logradouro = document.getElementById('cadastroEndereco');
        var estado = document.getElementById('cadastroEstado');
        var bairro = document.getElementById('cadastroBairro');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro;
        return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p class="text-white text-sm">CEP inválido. Tente novamente!</p>`
    }
}

var cep = document.getElementById('cadastroCep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));