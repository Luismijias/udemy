//Armazenando uma funcao sem nome em uma variavel

const imprimirSoma = function (a, b) {
  console.log(a + b);
};
imprimirSoma(3, 32);

//Armazenando uma funçao arrow em uma variável

const soma = (a, b) => {
  return a + b;
};
console.log(soma(22, 9));


// retorno implícioto

const subtracao = (a , b) => a - b
console.log(subtracao(16,5))

const imprimir = a => console.log(a)
imprimir("Good")

