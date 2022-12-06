const anguloA = 15;
const anguloB = 90;
const anguloC = 75;
let triangulo;

if (((anguloA + anguloB + anguloC) === 180) && anguloA > 0 && anguloB > 0 && anguloC > 0) {
    triangulo = true;
    console.log(triangulo);
}

else if (((anguloA + anguloB + anguloC) !== 180) && anguloA > 0 && anguloB > 0 && anguloC > 0) {
    triangulo = false;
    console.log(triangulo);
}

else {
    console.log("Opa! Algum ângulo não é valido. Verifique por favor e tente novamente.")
}
