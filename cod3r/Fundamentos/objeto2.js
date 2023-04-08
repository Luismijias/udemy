console.log(typeof Object)
console.log(typeof  new Object)//o objeto pode estar sem parênteses

const Client = function(){}
console.log(typeof Client)
console.log(typeof new Client)

class Produto {} // ES 2015 (ES6)  neste caso é uma funçao
console.log(typeof Produto)
console.log(typeof new Produto()) //neste caso foi chamado objeto com parênteses




//treinando
function factoryFunctionCelular (marcaCelular,tamanhoTela,capacidadedeBateria){
    return{
        marcaCelular,
        tamanhoTela,
        capacidadedeBateria,
        ligar(){
            console.log('chamando...')
        }
    }
}

console.log(typeof 'ExemplofactoryFunctionCelular -->',factoryFunctionCelular('xiaomi',5.7,2800))
function ContructionFunctionCelular(marcaCelular,tamanhoTela,capacidadedeBateria){
    this.marcaCelular = marcaCelular
    this.tamanhoTela = tamanhoTela
    this.capacidadedeBateria = capacidadedeBateria
    this.ligar = function Chamando_trimmmm_trimmmm() {
        console.log();
      }
}
const celular = new ContructionFunctionCelular ('ausus',5.5,2500)
console.log(typeof 'Exemplo de constructor Function OBJETO --->',celular )