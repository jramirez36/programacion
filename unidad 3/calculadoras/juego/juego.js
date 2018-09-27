var btnCalculars = document.querySelector('#subir');
btnCalculars.addEventListener('click', subir);
var btnCalculars = document.querySelector('#bajar');
btnCalculars.addEventListener('click', bajar);
var n = 1;

function subir()
{
    var inputNumero1 = document.querySelector('#numero1');
    var Resultado = Number(inputNumero1.value) + 1 ;
    var inputResultado = document.querySelector('#numero1')
    inputResultado.value = Resultado;
}
function bajar()
{
    var inputNumero1 = document.querySelector('#numero1');
    var Resultado = Number(inputNumero1.value) - 1 ;
    var inputResultado = document.querySelector('#numero1')
    inputResultado.value = Resultado;
}