console.log("Funcao sem retorno");
function imprimirSoma(a, b) {
  console.log(a + b);
}
imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 3, 4, 5); // vai somar o a e b e ignororá o primeiro.
imprimirSoma();

console.log("Funcao com retorno");

function soma(a, b = 1) {
  return a + b;
}
soma(8, 8); // neste caso usou o return de a + b então não irá retornar nada.
console.log(soma()); // neste exemplo ele retorna o Nan porque no caso o a é undefined.
console.log(soma(8)); // neste caso foi ultizado como valor padrão  b recebe 1
console.log(soma(8, 8));

console.log("Treinando");
function subtracao(a = 11, b = 7) {
  console.log(a - b);
}
subtracao();

