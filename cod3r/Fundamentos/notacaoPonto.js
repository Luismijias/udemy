console.log("Arredonda valor para cima==>",Math.ceil(6.1))
console.log("arredonda para baixo==>",Math.floor(6.995)) 

const obj1 = {}
obj1.nome = "bola3333"
// obj1['nome'] = 'bola2'//sobrescreve o atributo do objeto
console.log("objeto 1 sem alteração ==> ", obj1)



function Obj(nome) {
  this.nome = nome

  this.exec = function () {
    console.log("Exec...")
  }
  console.log("Objeto dentro da função =", nome)
}
const obj2 = new Obj("Cadeira")
const obj3 = new Obj("mesa")
console.log(obj1.nome)
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()