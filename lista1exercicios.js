const prompt = require('prompt-sync')();

/*
    Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
    valor correspondente em graus Fahrenheit.
*/

let temperaturaCelsius = prompt("Digite uma temperatura em Celsius: ");
let resultado = temperaturaCelsius * 1.8 + 32;
console.log(`O resultado de ${temperaturaCelsius}ºC em Fahrenheit é ${resultado}ºF`);
