let cardsCarros = []
const ednPointDaAPI = 'https://raw.githubusercontent.com/allessandrogomes/carsOn/main/carros.json'
getBuscarCarrosDaAPI()

async function getBuscarCarrosDaAPI() {
    const res = await fetch(ednPointDaAPI)
    cardsCarros = await res.json()
    exibirOsCarros(cardsCarros)
}