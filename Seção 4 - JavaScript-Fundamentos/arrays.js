const valores = [7.7, 8.9, 5.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); //não possui indice 4, portanto vai dar undefined

valores[4] = 10;
console.log(valores); //adicionou um elemento no array e mostra na lista
console.log(valores.length); //mostra o tamanho do array

console.log(valores.pop()); //mostra o ultimo valor do array
delete valores[0]; //vai deletar elemento da posição 0 do array

console.log(typeof valores); //vai retornar o tipo do array, no caso eh um objeto