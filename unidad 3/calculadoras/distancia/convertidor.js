var btnCalcular = document.querySelector('#convertir');
btnCalcular.addEventListener('click', distancia);
function distancia()
{
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector('#numero2');
    var Resultado = Number(inputNumero1.value) * Number(inputNumero2.value);
    var inputResultado = document.querySelector('#Resultado');
    inputResultado.value = Resultado;
}