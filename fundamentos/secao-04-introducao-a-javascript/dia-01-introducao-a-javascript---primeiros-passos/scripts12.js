const nota = 100;
let conceito;

if (nota >= 90 && nota <= 100) {
    conceito = 'A';
}

else if (nota >= 80 && nota < 90) {
    conceito = 'B';
}

else if (nota >= 70 && nota < 80) {
    conceito = 'C';
}

else if (nota >= 60 && nota < 70) {
    conceito = 'D';
}

else if (nota >= 50 && nota < 60) {
    conceito = 'E';
}

else if (nota >= 0 && nota < 50){
    conceito = 'F';
}

else {
    console.log('Desculpe, essta não é uma nota válida.');
}

console.log('Seu conceito foi: ' + conceito);