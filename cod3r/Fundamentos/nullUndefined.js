let valor // não inicializada
console.log(valor)


valor = null //ausencia de valor
console.log(valor)

// console.log(valor.toString()) // Erro !!

const produto = {}

console.log(produto.preco)

console.log(produto)

produto.preco = 3.5

console.log(produto)

produto.preco = undefined //evite atribuir undefined prefira ultilizar 0 ou null

console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null //sem preco

console.log(!!produto.preco)

console.log(produto)

