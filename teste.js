const prompt = require('prompt-sync') ();

/*
    Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
    comprimentos e diga se é possível formar um triângulo com essas retas.
    Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
    lado deve ser menor que a soma dos outros dois.
*/


let lado1 = parseInt(prompt("Insira o comprimento do primeiro número: "));
let lado2 = parseInt(prompt("Insira o comprimento do segundo número: "));
let lado3 = parseInt(prompt("Insira o comprimento do terceiro número: "));

    if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
        console.log('Valores formam um triângulo')
}   else{
        console.log("Valores não formam um triângulo")
}
