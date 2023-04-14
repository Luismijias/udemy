const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado" // Equivalente  a if e else

/** se monta um operador ternário de seguinte foram
 * (expressão que retorna true ou false) ? (resposta do true) : ( resposta do false)
 * Praticamente ele faz a função do if 
 * Obs pode ser feito em uma funcão arrow function também**/

console.log(resultado(7.1))
console.log(resultado(6.9))
