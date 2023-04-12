// novo recurso do ES2015

const pessoa = {
    nome:'Ana',
    idade:19,
    endereco: {
        logradouro:'Rua ABC',
        numero: 1000
    }
}

const {nome,idade} = pessoa
console.log(`A ${nome} tem ${idade} anos.`)

const {nome: n, idade: i} = pessoa
console.log(`A ${n} tem ${i} anos.`)

const {sombrenome, bemHumorada = true} = pessoa
console.log(sombrenome,bemHumorada)

const { endereco: {logradouro,numero,cep}} = pessoa
console.log(logradouro,numero,cep)

const {conta: {ag=22,num=20}} = pessoa //cuidada para não tentar acessar caminhos inexistentes.
console.log(ag, num)