let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = "teste"
console.log(this.a)
console.log(global.a)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

module.exports = {e:4555, f: false, g: "valor"}

console.log(module.exports)

abc = 323 //criando uma variavel maluca: sem var e let!!
console.log(global.abc)//não se faz isso evite tocar o escopo global

