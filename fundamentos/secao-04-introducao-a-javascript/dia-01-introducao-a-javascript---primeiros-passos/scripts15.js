const custoProduto = 2;
const valorVenda = 5;
const imposto = custoProduto * 0.2;
const custoTotal = custoProduto;
let lucro = valorVenda - custoProduto;
let quantidade = 1000;
let lucroLiquido = (valorVenda - custoTotal) * quantidade;

if (custoProduto >= 0 && valorVenda >= 0) {
    console.log("Após a venda de " + quantidade + " itens, você terá o lucro de " + lucroLiquido + " com esta venda.")
}

else {
    console.log("Valor do produto inválido. Por favor verifique e tente novamente.");
}