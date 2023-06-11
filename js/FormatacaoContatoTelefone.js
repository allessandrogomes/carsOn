const inputContato = document.getElementById("cadastroContato")


inputContato.addEventListener('keypress', () => {
    if (inputContato.value.length == 0) {
        inputContato.value += '(';
    } else if (inputContato.value.length == 3) {
        inputContato.value += ') ';
    } else if (inputContato.value.length == 10) {
        inputContato.value += '-';
    }
})

function caracteresTelefone(input) {
    input.addEventListener('input', function (event) {
        const value = event.target.value;

        event.target.value = value.replace(/[^\d()\- ]/g, '');
    });
}

caracteresTelefone(inputContato)