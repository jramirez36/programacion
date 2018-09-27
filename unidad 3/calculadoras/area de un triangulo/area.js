var btnCalcular = document.querySelector('#Area');
btnCalcular.addEventListener('click', area);
function area()
{
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector('#numero2');
    var Resultado = Number(inputNumero1.value) * Number(inputNumero2.value) / 2 ;
    var inputResultado = document.querySelector('#Resultado');
    inputResultado.value = Resultado;
}