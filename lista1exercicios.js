const prompt = require('prompt-sync')();

/*
    Exercício 1
*/

let temperaturaCelsius = prompt("Digite uma temperatura em Celsius: ");
let resultado = temperaturaCelsius * 1.8 + 32;
console.log(`O resultado de ${temperaturaCelsius}ºC em Fahrenheit é ${resultado}ºF`);
