// ponto de exclamação '!' significa negação or not. Então !! é como se fosse
// não não então retorna o valor para o inicial, se era verdadeiro fica 
//verdadeiro vira falso e volta a ser verdadeiro

//Duas barras em pé '||' significa 'OU'. no caso 1 || 2 seria um ou dois. 
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')

console.log(!!(' ' || null || 0 || ''))/* se ele encontrar ao menos um valor verdadeiro ele retorna true.
obs: estamos usando os "!!".*/

console.log(('' || null || 0 || 'Epa esse é o primeiro valor true' || 'Segundo valor true'))// irá retornar o primeiro valor verdadeiro encontrando.
console.log(('' || null || 0 || NaN || 'Primeiro valor true'))/* irá retornar o primeiro valor verdadeiro encontrando.
obs: sem os sinais de "!!".*/


let nome = 'Lucas' //modo comum de validas as coisas.
console.log(nome || 'Desconhecido')

nome = '' // estando como false irá para o próximo.
console.log(nome || 'Desconhecido')
                                    










