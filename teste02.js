/*1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

// Numero a ser verificado;
let n = 34

let sequencia = [0, 1];  // Início da sequência de Fibonacci
let i = 2;

// Gera a sequência de Fibonacci até o número ser maior ou igual a 'n'
while (sequencia[i - 1] + sequencia[i - 2] <= n) {
    sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
    i++;
}

// Verifica se 'n' pertence à sequência gerada
if (sequencia.includes(n)) {
    console.log(`${n} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${n} não pertence à sequência de Fibonacci.`);
}


