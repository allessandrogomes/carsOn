const sessaoCarros = document.getElementById('sessao-carros')

function exibirOsCarros(listaDeCarros) {
    sessaoCarros.innerHTML = ''
    listaDeCarros.forEach(carro => {
        sessaoCarros.innerHTML += `
        <div class="carro w-56 m-1 mb-10">
                        <div class="mb-2 rounded-borde-radius-32px w-56 h-32 bg-no-repeat bg-cover"
                            style="background-image: url('${carro.imagem}');"></div>
                        <div class="flex">
                            <div class="w-px h-50 bg-color3"></div>
                            <div>
                                <h3 class="nomeCarro ml-4 uppercase mb-1 text-base font-archivo font-bold text-color2">${carro.nome}
                                </h3>
                                <h4 class="ml-4 mb-1 text-lg font-bold font-big-shoulders-display">R$ ${carro.preco}</h4>
                                <div class="flex mb-3">
                                    <h4 class="ml-4 mr-6 font-archivo text-sm">${carro.ano}&#47;${carro.ano}</h4>
                                    <h4 class="font-archivo text-sm">${carro.km}km</h4>
                                </div>
                                <h4 class="ml-4 mb-4 font-archivo text-sm capitalize">${carro.cidade} - <span class="estadoCarro uppercase">${carro.estado}</span></h4>
                                <button
                                    class="text-color1 font-bold font-archivo relative left-4 px-14 py-2 rounded-borde-radius-32px border border-color3">Comprar</button>
                            </div>
                        </div>
                    </div>
        `
        
    })
}