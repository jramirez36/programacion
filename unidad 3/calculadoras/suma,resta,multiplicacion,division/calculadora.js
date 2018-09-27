var btnCalculars = document.querySelector('#Calculars');
var btnCalcularr = document.querySelector('#Calcularr');
var btnCalcularm = document.querySelector('#Calcularm');
var btnCalculard = document.querySelector('#Calculard');
btnCalculars.addEventListener('click', sumar);
btnCalcularr.addEventListener('click', resta);
btnCalcularm.addEventListener('click', multiplicacion);
btnCalculard.addEventListener('click', division);
function sumar()
{
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector('#numero2');
    var Resultado = Number(inputNumero1.value) + Number(inputNumero2.value);
    var inputResultado = document.querySelector('#Resultado')
    inputResultado.value = Resultado;
}
function resta()
{
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector('#numero2');
    var Resultado = Number(inputNumero1.value) - Number(inputNumero2.value);
    var inputResultado = document.querySelector('#Resultado')
    inputResultado.value = Resultado;
}
function multiplicacion()
{
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector('#numero2');
    var Resultado = Number(inputNumero1.value) * Number(inputNumero2.value);
    var inputResultado = document.querySelector('#Resultado')
    inputResultado.value = Resultado;
}
function division()
{
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector('#numero2');
    var Resultado = Number(inputNumero1.value) / Number(inputNumero2.value);
    var inputResultado = document.querySelector('#Resultado')
    inputResultado.value = Resultado;
}