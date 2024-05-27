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


/*
    Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
    Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
    valores da sequência.
*/


let primeiroTermo = parseInt(prompt("Insira um valor para o termo da PA: "));
let razao = parseInt(prompt("Insira um valor para razão da PA: "));
let soma = 0;
let progressao = primeiroTermo;

console.log(primeiroTermo);

for(let i = 1; i < 10; i++){
    progressao += razao;

    soma += progressao;
    console.log(progressao);
}

console.log(`A soma da progressão: ${soma}`);


/*
    Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
    Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
*/


function sequenciaFibonacci() {
    let num1 = 0; 
    let num2 = 1;

    console.log("Os 10 primeiros números da sequência de Fibonacci são:");

    for(let i = 0; i < 10; i++) {
        console.log(num1);
        let temp = num1;
        num1 += num2;
        num2 = temp;
    }
}

sequenciaFibonacci();


/*
    Crie um programa que preencha automaticamente (usando lógica, não apenas
    atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
    da sequência de Fibonacci.
*/


let num1 = 0;
let num2 = 1;
let vetor = [];

for(let i = 0; i < 15; i++) {
    vetor.push(num1);
    let temp = num1;
    num1 += num2;
    num2 = temp;
}

console.log(vetor);


/*
    Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
    mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
    que eles foram informados
*/

let vetor = [];

for(let i = 0; i < 7; i++) {
    let nome = prompt("Insira um nome: ");
    vetor.push(nome);
}
for(let i = vetor.length - 1; i >= 0; i--) {
    console.log(vetor[i]);
}


/*
    Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
    final, mostre quais são os números pares que foram digitados e em que posições eles
    estão armazenados.
*/


let vetor = [];
let numero;
let meusPares = [];

for(let i = 0; i < 10; i++){
    numero = parseInt(prompt("Insira um numero: "));
    vetor.push(numero);

    if(numero % 2 === 0){
        meusPares.push({valor: numero, posicao: i});
    }
} 

for(let obj of meusPares){
    console.log(`Na posição ${obj.posicao}, o valor par digitado foi ${obj.valor}`);
}


/*
    Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
    (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
    depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/


let vetor = [];

for (let i = 0; i < 20; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 100);
    vetor.push(numeroAleatorio);
}

console.log("Números gerados:");
console.log(vetor);

vetor.sort((a, b) => a - b);

console.log("Números ordenados:");
console.log(vetor);


/*
    Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
    dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
    os dados das pessoas menores de idade.
*/


let vetorNome = [];
let vetorIdade = [];
let nome;
let idade;

for (let i = 0; i < 10; i++) {
    nome = prompt("Digite um nome: ");
    idade = parseInt(prompt("Insira a idade: "));
    vetorNome.push(nome);
    vetorIdade.push(idade);
}

for(let i = 0; i < vetorIdade.length; i++){
    if(vetorIdade[i] < 18){
        console.log(`${vetorNome[i]} é menor de idade, sua idade é ${vetorIdade[i]} anos.`);
    }
}

/*
    Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
    um funcionário e ao final escreva o conteúdo do registro.
*/


let funcionario = {
    nome: "",
    cargo: "",
    salario: 0.0
}

let nome = prompt("Insira o nome do funcionário: ");
let cargo = prompt("Insira o cargo: ");
let salario = prompt("Insira o salário: ");

funcionario.nome = nome;
funcionario.cargo = cargo;
funcionario.salario = salario;

console.log("Registro de funcionario cadastrado:");

for(let item in funcionario){
    console.log(`${item}: ${funcionario[item]}`);
}


/*
    Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
    repetição. Escrever cada um deles no formato HH.MM.SS.
*/


let horarios = [];
let horario;
const regex = /^(0[0-9]|1[0-9]|2[0-3])\.[0-5][0-9]\.[0-5][0-9]$/;

while(horarios.length !== 5){
    horario = prompt("Insira um horário no formato HH.MM.SS ");

    if(regex.test(horario)){
        horarios.push(horario);
    } else {
        console.log("O horário inserido não corresponde ao padrão esperado");
    }
}

console.log('Horários inseridos:');
for(let horario of horarios){
    console.log(horario);
}


/*
    Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
    no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
    salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
    tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
    Matrícula:
    Nome:
    Salário bruto:
    Dedução INSS:
    Salário líquido:
    (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
    INSS).
*/


let deducao = 0;
const tabelaFuncionarios = [
    { matricula: 1, nome: 'Joao', salarioBruto: 1500.0 },
    { matricula: 2, nome: 'Maria', salarioBruto: 1550.0 },
    { matricula: 3, nome: 'Pedro', salarioBruto: 1600.0 },
    { matricula: 4, nome: 'Ana', salarioBruto: 1650.0 },
    { matricula: 5, nome: 'Carlos', salarioBruto: 1700.0 },
    { matricula: 6, nome: 'Fernanda', salarioBruto: 1750.0 },
    { matricula: 7, nome: 'Luis', salarioBruto: 1800.0 },
    { matricula: 8, nome: 'Paula', salarioBruto: 1850.0 },
    { matricula: 9, nome: 'Rafael', salarioBruto: 1900.0 },
    { matricula: 10, nome: 'Clara', salarioBruto: 1950.0 },
    { matricula: 11, nome: 'Joao', salarioBruto: 2000.0 },
    { matricula: 12, nome: 'Maria', salarioBruto: 2050.0 },
    { matricula: 13, nome: 'Pedro', salarioBruto: 2100.0 },
    { matricula: 14, nome: 'Ana', salarioBruto: 2150.0 },
    { matricula: 15, nome: 'Carlos', salarioBruto: 2200.0 },
    { matricula: 16, nome: 'Fernanda', salarioBruto: 2250.0 },
    { matricula: 17, nome: 'Luis', salarioBruto: 2300.0 },
    { matricula: 18, nome: 'Paula', salarioBruto: 2350.0 },
    { matricula: 19, nome: 'Rafael', salarioBruto: 2400.0 },
    { matricula: 20, nome: 'Clara', salarioBruto: 2450.0 },
    { matricula: 21, nome: 'Joao', salarioBruto: 2500.0 },
    { matricula: 22, nome: 'Maria', salarioBruto: 2550.0 },
    { matricula: 23, nome: 'Pedro', salarioBruto: 2600.0 },
    { matricula: 24, nome: 'Ana', salarioBruto: 2650.0 },
    { matricula: 25, nome: 'Carlos', salarioBruto: 2700.0 },
    { matricula: 26, nome: 'Fernanda', salarioBruto: 2750.0 },
    { matricula: 27, nome: 'Luis', salarioBruto: 2800.0 },
    { matricula: 28, nome: 'Paula', salarioBruto: 2850.0 },
    { matricula: 29, nome: 'Rafael', salarioBruto: 2900.0 },
    { matricula: 30, nome: 'Clara', salarioBruto: 2950.0 },
    { matricula: 31, nome: 'Joao', salarioBruto: 3000.0 },
    { matricula: 32, nome: 'Maria', salarioBruto: 3050.0 },
    { matricula: 33, nome: 'Pedro', salarioBruto: 3100.0 },
    { matricula: 34, nome: 'Ana', salarioBruto: 3150.0 },
    { matricula: 35, nome: 'Carlos', salarioBruto: 3200.0 },
    { matricula: 36, nome: 'Fernanda', salarioBruto: 3250.0 },
    { matricula: 37, nome: 'Luis', salarioBruto: 3300.0 },
    { matricula: 38, nome: 'Paula', salarioBruto: 3350.0 },
    { matricula: 39, nome: 'Rafael', salarioBruto: 3400.0 },
    { matricula: 40, nome: 'Clara', salarioBruto: 3450.0 },
    { matricula: 41, nome: 'Joao', salarioBruto: 3500.0 },
    { matricula: 42, nome: 'Maria', salarioBruto: 3550.0 },
    { matricula: 43, nome: 'Pedro', salarioBruto: 3600.0 },
    { matricula: 44, nome: 'Ana', salarioBruto: 3650.0 },
    { matricula: 45, nome: 'Carlos', salarioBruto: 3700.0 },
    { matricula: 46, nome: 'Fernanda', salarioBruto: 3750.0 },
    { matricula: 47, nome: 'Luis', salarioBruto: 3800.0 },
    { matricula: 48, nome: 'Paula', salarioBruto: 3850.0 },
    { matricula: 49, nome: 'Rafael', salarioBruto: 3900.0 },
    { matricula: 50, nome: 'Clara', salarioBruto: 3950.0 },
    { matricula: 51, nome: 'Joao', salarioBruto: 4000.0 },
    { matricula: 52, nome: 'Maria', salarioBruto: 4050.0 },
    { matricula: 53, nome: 'Pedro', salarioBruto: 4100.0 },
    { matricula: 54, nome: 'Ana', salarioBruto: 4150.0 },
    { matricula: 55, nome: 'Carlos', salarioBruto: 4200.0 },
    { matricula: 56, nome: 'Fernanda', salarioBruto: 4250.0 },
    { matricula: 57, nome: 'Luis', salarioBruto: 4300.0 },
    { matricula: 58, nome: 'Paula', salarioBruto: 4350.0 },
    { matricula: 59, nome: 'Rafael', salarioBruto: 4400.0 },
    { matricula: 60, nome: 'Clara', salarioBruto: 4450.0 },
    { matricula: 61, nome: 'Joao', salarioBruto: 4500.0 },
    { matricula: 62, nome: 'Maria', salarioBruto: 4550.0 },
    { matricula: 63, nome: 'Pedro', salarioBruto: 4600.0 },
    { matricula: 64, nome: 'Ana', salarioBruto: 4650.0 },
    { matricula: 65, nome: 'Carlos', salarioBruto: 4700.0 },
    { matricula: 66, nome: 'Fernanda', salarioBruto: 4750.0 },
    { matricula: 67, nome: 'Luis', salarioBruto: 4800.0 },
    { matricula: 68, nome: 'Paula', salarioBruto: 4850.0 },
    { matricula: 69, nome: 'Rafael', salarioBruto: 4900.0 },
    { matricula: 70, nome: 'Clara', salarioBruto: 4950.0 },
    { matricula: 71, nome: 'Joao', salarioBruto: 5000.0 },
    { matricula: 72, nome: 'Maria', salarioBruto: 5050.0 },
    { matricula: 73, nome: 'Pedro', salarioBruto: 5100.0 },
    { matricula: 74, nome: 'Ana', salarioBruto: 5150.0 },
    { matricula: 75, nome: 'Carlos', salarioBruto: 5200.0 },
    { matricula: 76, nome: 'Fernanda', salarioBruto: 5250.0 },
    { matricula: 77, nome: 'Luis', salarioBruto: 5300.0 },
    { matricula: 78, nome: 'Paula', salarioBruto: 5350.0 },
    { matricula: 79, nome: 'Rafael', salarioBruto: 5400.0 },
    { matricula: 80, nome: 'Clara', salarioBruto: 5450.0 },
];

for(let funcionario of tabelaFuncionarios){
    deducao = funcionario.salarioBruto * 0.12;

    console.log(`Matricula: ${funcionario.matricula}`);
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Salário bruto: R$${funcionario.salarioBruto.toFixed(2)}`);
    console.log(`Dedução INSS: R$${deducao.toFixed(2)}`);
    console.log(`Salário líquido: R$${(funcionario.salarioBruto - deducao).toFixed(2)}`);

    console.log('-----------------------------------');
}
