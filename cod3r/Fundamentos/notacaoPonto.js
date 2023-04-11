console.log(Math.ceil(6.1)) //arredonda para cima
console.log(Math.floor(6.995)) //arredonda para baixo
console.error("Atençao!!!")

const obj1 = {}
obj1.nome = 'bola'
// obj1['nome'] = 'bola2'//sobrescreve o atributo do objeto
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    console.log('Objeto dentro da função =',nome)
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)




