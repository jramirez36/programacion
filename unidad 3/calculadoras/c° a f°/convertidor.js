var btnCalculars = document.querySelector('#Convertir');
var f = 32;
btnCalculars.addEventListener('click', convertir);
function convertir()
{
    var inputNumero1 = document.querySelector('#numero1');
    var Resultado = Number(inputNumero1.value) *1.8 + f;
    var inputResultado = document.querySelector('#Resultado')
    inputResultado.value = Resultado;
}