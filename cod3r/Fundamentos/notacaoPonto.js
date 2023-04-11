console.log(Math.ceil(6.1)) //arredonda para cima
console.log(Math.floor(6.995)) //arredonda para baixo
console.error("Atençao!!!")

const obj1 = {}
obj1.nome = "bola"
const obj2 = new Obj("Cadeira")
const obj3 = new Obj("mesa")
// obj1['nome'] = 'bola2'//sobrescreve o atributo do objeto

function Obj(nome) {
  this.nome = nome
  this.exec = function () {
    console.log("Exec...")
  }
  console.log("Objeto dentro da função =", nome)
}
console.log(obj1.nome)
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
