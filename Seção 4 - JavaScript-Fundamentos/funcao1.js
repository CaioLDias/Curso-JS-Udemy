//função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2); //not a number, pq b não foi declarado
imprimirSoma(); //not a number

//funcao com valor
function soma(a, b=0) {
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma()); //NaN