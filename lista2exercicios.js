const prompt = require('prompt-sync') ();

/*
    Escreva um programa para calcular a redução do tempo de vida de um fumante.
    Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
    Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
    vida um fumante perderá e exiba o total em dias.
*/


const DIAS_EM_UM_ANO = 365;
const MINUTOS_PERDIDOS_POR_CIGARRO = 10;
const MINUTOS_EM_UM_DIA = 1440;

let quantidadeCigarrosFumados = prompt ("Digite a quantidade de cigarros fumados por dia: ");
let quantidadeEmAnos = prompt ("Informe a quantidade em anos que você fuma: ");
let quantidadeDias = (quantidadeEmAnos * DIAS_EM_UM_ANO);
let minutosPerdidos = (quantidadeCigarrosFumados * MINUTOS_PERDIDOS_POR_CIGARRO) * (quantidadeDias);
let quantidadeDiasPerdidos = (minutosPerdidos / MINUTOS_EM_UM_DIA);

console.log(`Você perdeu ${quantidadeDiasPerdidos.toFixed(2)} dias de vida`);


/*
    Escreva um programa que pergunte a velocidade de um carro. 
    Caso ultrapasse 80 Km/h, exiba uma mensagem dizendo que o usuário foi multado. 
    Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/


const VELOCIDADE_PERMITIDA = 80;
const MULTA_POR_KM_EXCEDIDO = 5;

let velocidadeVeiculo = parseInt(prompt("Insira a velocidade do veículo: "));
let diferencaVelocidade = (velocidadeVeiculo - VELOCIDADE_PERMITIDA);

diferencaVelocidade > 0 
    ? console.log(`Você foi multado! Valor da multa R$${(diferencaVelocidade * MULTA_POR_KM_EXCEDIDO).toFixed(2)}`)
    : console.log("Você não foi multado!");


/*
    Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
    Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
    R$ 0.45 para viagens mais longas.
*/


const VALOR_KM_RODADO1 = 0.50
const VALOR_KM_RODADO2 = 0.45
let quantidadePercorrida = parseFloat(prompt("Insira a distância em Km que deseja percorrer: "));
let distancia1 = (quantidadePercorrida * VALOR_KM_RODADO1);
let distancia2 = (quantidadePercorrida * VALOR_KM_RODADO2);

if(quantidadePercorrida <= 200){
    console.log(`Valor da passagem é de R$${distancia1.toFixed(2)}`);
} else{
    console.log(`Valor da passagem é de R$${distancia2.toFixed(2)}`);
}