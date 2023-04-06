const peso1 = 1.0
const peso2 = Number('2.0')
const peso3 = 1.1
const peso4 = Number('2.2')

console.log("peso1 e peso2 =",peso1,peso2)
console.log("peso1 é inteiro? =",Number.isInteger(peso1))// isInteger verifica se o número é inteiro.
console.log("peso2 é inteiro? =",Number.isInteger(peso2))
console.log("peso3 é inteiro? =",Number.isInteger(peso3))
console.log("peso4 é inteiro? =",Number.isInteger(peso4))

const avaliação1 = 9.871
const avaliação2 = 6.871

const total = avaliação1 * peso1 + avaliação2 * peso2
const media = total / (peso1 + peso2)

console.log("avaliação1 =",avaliação1)
console.log("avaliação2 =",avaliação2)
console.log("media das avaliações =",media.toFixed(2)) //arredonda para apenas 2 casas decimais
console.log("valor demédia como string =",media.toString())
console.log("valor demédia como string em valor binário =",media.toString(2))//converte o valor ponto flutuante em valor binário.