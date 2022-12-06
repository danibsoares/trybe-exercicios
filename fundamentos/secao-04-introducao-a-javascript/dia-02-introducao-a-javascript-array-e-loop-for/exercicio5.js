// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroAtual = 0;
let numeroAnterior = 0;
let maior = 0;

for (let index = 0; index < numbers.length; index += 1) {
    numeroAnterior = maior;
    numeroAtual = numbers[index];

    if (numeroAtual > numeroAnterior) {
        maior = numeroAtual;
    }
    else {
        maior = numeroAnterior;
    }
}

console.log(maior);