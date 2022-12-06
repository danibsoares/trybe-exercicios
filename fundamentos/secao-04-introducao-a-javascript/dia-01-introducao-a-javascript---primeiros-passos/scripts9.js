const a = 12;
const b = 52;
const c = 133;

if (a > b && a > c) {
    console.log(a + " é o maior número entre " + a + ", " + b + " e " + c + ".");
}

else if (b > a && b > c) {
    console.log(b + " é o maior número entre " + a + ", " + b + " e " + c + ".");
}

else {
    console.log(c + " é o maior número entre " + a + ", " + b + " e " + c + ".");
}