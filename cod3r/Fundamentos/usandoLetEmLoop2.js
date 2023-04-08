const funcs = [];

for (let i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}
funcs[2]();
funcs[8]();
funcs[8]();
/**Neste exemplo os valores serão 2 e 8 ela respeita
 *  o escopo de bloco diferente do var no caso a função
 * tem consciencia do local onde ele foi construida */
