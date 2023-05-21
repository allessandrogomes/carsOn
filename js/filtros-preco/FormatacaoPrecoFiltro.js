function formataPreco(input) {
    input.addEventListener('input', () => {
        const value = input.value.replace(/\D/g, '');
        const intValue = parseInt(value, 10);
        
        if (isNaN(intValue)) {
            input.value = '';
        } else {
            const formattedValue = intValue.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
            input.value = formattedValue.replace(/^(R\$\s*)?/i, '');
        }
        filtrarCarros()
    });
}

const inputPreco = document.querySelectorAll('.inputPreco');
inputPreco.forEach(formataPreco)