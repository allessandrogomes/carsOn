function somenteNumeros(input) {
  input.addEventListener('input', function (event) {
    const value = event.target.value;

    event.target.value = value.replace(/\D/g, '');
  });
}

const inputAno = document.querySelectorAll('.inputAno')
inputAno.forEach(somenteNumeros)

