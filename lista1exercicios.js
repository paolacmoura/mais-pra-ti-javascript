const prompt = require('prompt-sync')();

/*
    Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
    valor correspondente em graus Fahrenheit.
*/

let temperaturaCelsius = prompt("Digite uma temperatura em Celsius: ");
let resultado = temperaturaCelsius * 1.8 + 32;
console.log(`O resultado de ${temperaturaCelsius}ºC em Fahrenheit é ${resultado}ºF`);


/*
    Escreva um algoritmo para ler o número de eleitores de um município, o número de
    votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
    em relação ao total de eleitores.
*/

let quantidadeEleitores = prompt("Insira a quantidade total de eleitores: ");
let quantidadeVotosBrancos = prompt("Insira a quantidade de votos brancos: ");
let quantidadeVotosNulos = prompt("Insira a quantidade de votos nulos: ");
let quantidadeVotosValidos = prompt("Insira a quantidade de votos válidos: ");

while(!(quantidadeEleitores > 0) || !(quantidadeVotosBrancos >= 0) || !(quantidadeVotosNulos >= 0) || !(quantidadeVotosValidos >= 0)){
    if (quantidadeEleitores <= 0) {
        quantidadeEleitores = prompt("Quantidade de eleitores é inválida, insira um valor maior que zero: ");
    }
    if (quantidadeVotosBrancos < 0) {
        quantidadeVotosBrancos = prompt("Quantidade de votos brancos é inválida, insira um valor igual ou maior que zero: ");
    }
    if (quantidadeVotosNulos < 0) {
        quantidadeVotosNulos = prompt("Quantidade de votos nulos é inválida, insira um valor igual ou maior que zero: ");
    }
    if (quantidadeVotosValidos < 0) {
        quantidadeVotosValidos = prompt("Quantidade de votos válidos é inválida, insira um valor igual ou maior que zero: ");
    }
}

let percentualVotosBrancos = (quantidadeVotosBrancos * 100) / quantidadeEleitores;
let percentualVotosNulos = (quantidadeVotosNulos * 100) / quantidadeEleitores;
let percentualVotosValidos = (quantidadeVotosValidos * 100) / quantidadeEleitores;

console.log (`Obteve-se o valor de ${percentualVotosBrancos}% de votos em branco.`);
console.log (`Obteve-se o valor de ${percentualVotosNulos}% de votos em nulos.`);
console.log (`Obteve-se o valor de ${percentualVotosValidos}% de votos em válidos.`);


/*
    Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
        ● Some 25 ao primeiro inteiro;
        ● Triplique o valor do segundo inteiro;
        ● Modifique o valor do terceiro inteiro para 12% do valor original;
        ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
          dos primeiros três inteiros.
*/

let primeiroNumero = parseInt(prompt("Digite um número inteiro: "));
let segundoNumero = parseInt(prompt("Digite o segundo número inteiro: "));
let terceiroNumero = parseInt(prompt("Digite o terceiro número inteiro: "));
let quartoNumero = parseInt(prompt("Digite o quarto número inteiro: "));

let calculoPrimeiroNumero = primeiroNumero + 25;
let calculoSegundoNumero = segundoNumero * 3;
let calculoTerceiroNumero = terceiroNumero * 0.12;
let calculoQuartoNumero = primeiroNumero + segundoNumero + terceiroNumero + quartoNumero;

console.log(calculoPrimeiroNumero);
console.log(calculoSegundoNumero);
console.log(calculoTerceiroNumero);
console.log(calculoQuartoNumero);


/*
    Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
    calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
    aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
    aprovação).
*/

let primeiraNota = parseFloat(prompt("Digite a primeira nota: "));
let segundaNota = parseFloat(prompt("Digite a segunda nota: "));

let mediaSemestre = (primeiraNota + segundaNota) / 2;

if (mediaSemestre >= 6){
    console.log("PARABÉNS! Você foi aprovado");
}


/*
    Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
    média calculada seja menor que 6,0
*/

if (mediaSemestre < 6){
    console.log("Você foi REPROVADO! Estude mais");
}