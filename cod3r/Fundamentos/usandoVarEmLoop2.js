const funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}
funcs[2]()
funcs[8]() /** No caso a função "var" não tem escopo de 
bloco os valores serão 10.Problema histórico do js um dos motivos
de ter se criado o let**/


