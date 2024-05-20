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



/*
    Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)
*/


let jogador1;
let jogador2;
let empateJogadores = false;
let desejaContinuar;

while(empateJogadores !== true){
    console.log('Jogador 1\nEscolha uma opção abaixo:\n1 - PEDRA\n2 - PAPEL\n3 - TESOURA');
    jogador1 = prompt();

    console.log('Jogador 2\nEscolha uma opção abaixo:\n1 - PEDRA\n2 - PAPEL\n3 - TESOURA');
    jogador2 = prompt();

    if(jogador1 === jogador2){
        console.log("Empate")
    }else
    
    if(jogador1 === '1' && jogador2 ==='2'){
        defineGanhador(2)
    }else
    if(jogador1 === '1' && jogador2 === '3'){
        defineGanhador(1)
    }else

    if(jogador1 === '2' && jogador2 === '1'){
        defineGanhador(1)
    }else
    if(jogador1 === '2' && jogador2 === '3'){
        defineGanhador(2)
    }else

    if(jogador1 === '3' && jogador2 == '2'){
        defineGanhador(1)
    }else
    if(jogador1 === '3' && jogador2 === '1'){
        defineGanhador(2)
    }else{
        console.log('Opção inválida, escolha os valores 1, 2 ou 3')
    }
};

function defineGanhador(jogador){
    console.log(`Jogador ${jogador} ganhou!`)
    desejaContinuar = prompt("Deseja continuar? S/N ")
    desejaContinuar === 'S'|| desejaContinuar === 's'? null : empateJogadores = true
};


/*
    Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
    tentar descobrir qual foi o valor sorteado.
*/


const numeroCorreto = Math.floor(Math.random() * 5) + 1;

let tentativa;
do {
    tentativa = parseInt(prompt("Adivinhe o número entre 1 e 5: "));
    if(tentativa != numeroCorreto){
        console.log("Tente outro número.")
    }
} while (tentativa != numeroCorreto)

console.log("Parabéns! Você acertou.");


/*
    Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
    carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
    cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
    (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
    mostre o preço a ser pago de acordo com os dados a seguir:
    Carros populares
    - Até 100 Km percorridos: R$ 0,20 por Km
    - Acima de 100 Km percorridos: R$ 0,10 por Km
    Carros de luxo
    - Até 200 Km percorridos: R$ 0,30 por Km
    - Acima de 200 Km percorridos: R$ 0,25 por Km
*/


const CARRO_POPULAR = 90;
const CARRO_LUXO = 150;
let tipoVeiculos = prompt("Insira 1 para veículo popular e 2 para veículo de luxo: ")
let kmPercorrido = parseInt(prompt("Insira os km percorridos com o veículo: "));
let diasDeAluguel = parseInt(prompt("Insira quantos dias permaneceu com o veículo: "));

function carroPopularCurtaDistancia(dias, km){
    return (CARRO_POPULAR * dias) + (0.20 * km)
} 
function carroPopularLongaDistancia(dias, km){
    return (CARRO_POPULAR * dias) + (0.10 * km)
} 
function carroLuxoCurtaDistancia(dias, km){
    return (CARRO_LUXO * dias) + (0.30 * km)
} 
function carroLuxoLongaDistancia(dias, km){
    return (CARRO_LUXO * dias) + (0.25 * km)
} 

if(tipoVeiculos == 1){
    if(kmPercorrido <= 200){
        console.log(`Valor total do aluguel: R$${carroPopularCurtaDistancia(diasDeAluguel, kmPercorrido).toFixed(2)}`)
    }else{ 
        console.log(`Valor total do aluguel: R$${carroPopularLongaDistancia(diasDeAluguel, kmPercorrido).toFixed(2)}`)
    }
}

if(tipoVeiculos == 2){
    if(kmPercorrido <= 200){
        console.log(`Valor total do aluguel: R$${carroLuxoCurtaDistancia(diasDeAluguel, kmPercorrido).toFixed(2)}`)
    }else{ 
        console.log(`Valor total do aluguel: R$${carroLuxoLongaDistancia(diasDeAluguel, kmPercorrido).toFixed(2)}`)
    }
}


/*
    Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
    podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
    sistema funciona assim:
    - até 10 h de atividade no mês: ganha 2 pontos por hora
    - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
    - acima de 20 h de atividade no mês: ganha 10 pontos por hora
    - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
    Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
    Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
*/


let horasAtividadesRealizadas = parseFloat(prompt("Insira a quantidade de horas realizadas: "));

function pontosNivelUm(horas){
    return (horas * ATE_DEZ_HORAS_NO_MES)
}
function pontosNivelDois(horas){
    return (horas * DEZ_A_VINTE_HORAS_NO_MES)
}
function pontosNivelTres(horas){
    return (horas * ACIMA_DE_VINTE_HORAS_NO_MES)
}

function calculaNivelUm(horas){
    return pontosNivelUm(horas) * DINHEIRO_POR_HORA_ATIVIDADE
}
function calculaNivelDois(horas){
    return pontosNivelDois(horas) * DINHEIRO_POR_HORA_ATIVIDADE
}
function calculaNivelTres(horas){
    return pontosNivelTres(horas) * DINHEIRO_POR_HORA_ATIVIDADE
}

if(horasAtividadesRealizadas < 10){
    console.log(`Você atingiu ${pontosNivelUm(horasAtividadesRealizadas)} pontos`)
    console.log(`Você ganhou R$${calculaNivelUm(horasAtividadesRealizadas).toFixed(2)}`)
} 
if(horasAtividadesRealizadas >= 10 && horasAtividadesRealizadas < 20){
    console.log(`Você atingiu ${pontosNivelDois(horasAtividadesRealizadas)} pontos`)
    console.log(`Você ganhou R$${calculaNivelDois(horasAtividadesRealizadas).toFixed(2)}`)
}
if(horasAtividadesRealizadas >= 20){
    console.log(`Você atingiu ${pontosNivelTres(horasAtividadesRealizadas)} pontos`)
    console.log(`Você ganhou R$${calculaNivelTres(horasAtividadesRealizadas).toFixed(2)}`)
}


/*
    Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
    mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
    perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
    funcionário.
*/


let sexo;
let salarioFeminino = 0;
let salarioMasculino = 0;
let desejaContinuar;

do{
    sexo = prompt("Digite o sexo do funcionário: M = Masculino ou F = Feminino ")

    if(["M", "m"].includes(sexo)){
        salarioMasculino += parseFloat(prompt("Informe o salario(R$): "))    
    }

    if(["F", "f"].includes(sexo)){
        salarioFeminino += parseFloat(prompt("Informe o salario(R$): "))
    }

    desejaContinuar = prompt("Deseja continuar? S ou N ")

} while(["S", "s"].includes(desejaContinuar))

console.log(`O gasto com salários masculinos é de R$${salarioMasculino.toFixed(2)}\nO gasto com salários femininos é de R$${salarioFeminino.toFixed(2)}`)


/* 
    Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
    cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
    a) O somatório entre todos os valores;
    b) Qual foi o menor valor digitado;
    c) A média entre todos os valores;
    d) Quantos valores são pares.
*/


let numero;
let soma = 0;
let menorValor = 0;
let i = 0;
let quantidadePares = 0;
let desejaContinuar;

do{
    numero = parseFloat(prompt(" Digite um número: "));
    soma += numero;

    if(menorValor === 0){
        menorValor = numero;
    }

    if(numero < menorValor){
        menorValor = numero;
    }

    i++;

    if(numero % 2 === 0){
        quantidadePares++;
    }

    desejaContinuar = prompt("Deseja continuar? S ou N ");

} while(["S", "s"].includes(desejaContinuar))

console.log(`A soma dos números digitados é:${soma}`);
console.log(`O menor valor digitado foi:${menorValor}`);
console.log(`A média dos valores digitados foi de:${soma/i}`);
console.log(`A quantidade de numeros pares digitados é: ${quantidadePares}`);