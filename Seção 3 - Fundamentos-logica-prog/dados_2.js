//let = var (variável).
//const = constante(nunca muda).

let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);

console.log(precoComDesconto);

//concatenações
let nome = 'Caderno';
let categoria = 'Papelaria';
console.log('Produto: ' + nome + ' Categoria: ' + categoria + ' Preço: ' + preco + ' Desconto: ' + desconto + ' Preço com desconto: ' + precoComDesconto);