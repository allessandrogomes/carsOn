const filtrosCor = document.querySelectorAll('.filtroCor')

function toggleBorderCor() {
    filtrosCor.forEach((filtroCor) => {
        filtroCor.addEventListener('click', () => {
            if(filtroCor.classList.contains("border-transparent")) {
                filtroCor.classList.remove("border-transparent")
            } else {
                filtroCor.classList.add("border-transparent")
            }
        })
    })
}

toggleBorderCor()