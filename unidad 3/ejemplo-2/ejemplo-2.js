var btnCalcular = document.querySelector('#Calcular');
btnCalcular.addEventListener('click', suma);
function sumar()
{
    var inputNumero1 = document.querySelector('numero1');
    var inputNumero2 = document.querySelector('numero2');
    var resultado = Number(inputNumero1.value) + Number(inputNumero2.value);
    var inputResultado = document.querySelector('#Resultado')
    inputResultado.value = resultado;
}