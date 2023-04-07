const filtrosMarca = document.querySelectorAll('.filtroMarca')

function toggleBorderMarca() {
    filtrosMarca.forEach((filtroMarca) => {
        filtroMarca.addEventListener('click', () => {
            if(filtroMarca.classList.contains("border-transparent")) {
                filtroMarca.classList.remove("border-transparent")
            } else {
                filtroMarca.classList.add("border-transparent")
            }
        })
    })
}

toggleBorderMarca()