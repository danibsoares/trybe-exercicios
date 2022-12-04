const salarioBruto = 3000;
let aliquotaInss;
let aliquotaIrrf;
let deducao;
let tetoInss;
let inss;
let irrf;

if (salarioBruto <= 1556.94) {
    aliquotaInss = 0.08;
    aliquotaIrrf = 0;
    deducao = 0;
    tetoInss = 0;
}

else if (salarioBruto > 1559.94 && salarioBruto <= 1903.99) {
    aliquotaInss = 0.09;
    aliquotaIrrf = 0;
    deducao = 0;
    tetoInss = 0;
}

else if (salarioBruto > 1903.99 && salarioBruto <= 2594.92) {
    aliquotaInss = 0.09;
    aliquotaIrrf = 0.075;
    deducao = 142.80;
    tetoInss = 0;
}

else if (salarioBruto > 2594.92 && salarioBruto <= 2826.65) {
    aliquotaInss = 0.11;
    aliquotaIrrf = 0.075;
    deducao = 142.80;
    tetoInss = 0;
}

else if (salarioBruto > 2826.65 && salarioBruto <= 3751.05) {
    aliquotaInss = 0.11;
    aliquotaIrrf = 0.15;
    deducao = 354.80;
    tetoInss = 0;
}

else if (salarioBruto > 3751.05 && salarioBruto <= 4664.68) {
    aliquotaInss = 0.11;
    aliquotaIrrf = 0.225;
    deducao = 636.13;
    tetoInss = 0;
}

else if (salarioBruto > 4664.68 && salarioBruto <= 5189.82) {
    aliquotaInss = 0.11;
    aliquotaIrrf = 0.275;
    deducao = 869.36;
    tetoInss = 0;
}

else {
    aliquotaInss = 0;
    aliquotaIrrf = 0.15;
    deducao = 354.80;
    tetoInss = 570.88;
}

inss = (salarioBruto * aliquotaInss) + tetoInss;
irrf = (salarioBruto* aliquotaIrrf) - deducao;
salarioLiquido = salarioBruto - inss - irrf;
console.log(salarioBruto);
console.log(aliquotaInss);
console.log(tetoInss);
console.log(inss);

console.log(aliquotaIrrf);
console.log(deducao);
console.log(irrf);



console.log("Seu salário líquido é: R$" + salarioLiquido);