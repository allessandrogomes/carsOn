function formataPreco(input) {
    input.addEventListener('input', () => {
        const value = input.value.replace(/\D/g, '');
        const intValue = parseInt(value, 10);
        input.value = intValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 0 });
    });
}

const inputPreco = document.querySelectorAll('.inputPreco');
inputPreco.forEach(formataPreco)