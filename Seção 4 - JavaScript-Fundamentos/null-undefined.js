let valor; //nao inicializada
console.log(valor);

valor = null; //ausencia de valor
console.log(valor);

const produto = {};
console.log(produto.preco); //preco  nao esta definido, portanto undefined

produto.preco = 3.5;
console.log(produto);

//produto.preco = undefined; //nao atribuir undefined

produto.preco = null; //sem preco
console.log(!!produto.preco);
console.log(produto);