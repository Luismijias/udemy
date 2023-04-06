/*chaves é como cria objeto.Assim como objeto é uma coleção de chave/valor
*chave no caso é o valor único
*e o valor é atribuido a chave.
*exemplo:*/
const prod1 = {}
prod1.nome = 'celular xiaomi'
prod1.preco = 1.99
prod1['Desconto Legal'] = 0.15 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome:'camisa polo',
    preco:66.25,
    cor:{
        azul:2,
        verde:3,
        cinza:{
            P:4,M:3,G:3
    }
}}

console.log(prod2.cor.cinza.G)

console.log(prod2)

//Curiosidade JSON é um forma textual de objeto. Para ter interoperabilidade entre sistemas.


