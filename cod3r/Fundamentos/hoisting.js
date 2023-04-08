console.log("Aqui a variável é undefined porem existe, a =", a)
var a = 2;
console.log("Aqui a variável é undefined porem existe, a =", a)

//O exemplo acima tem o comportamento do exemplo a seguir:
var b;
console.log("este exemplo mostra o comportamento então b =", b)
b = 3;
console.log("este exemplo mostra o comportamento então b =", b)

//Outro exemplo porem dentro da funçao
function exemplo() {
  console.log("Mesmo comportamento dentro da função então: c =", c)
  var c = 6;
  console.log("Mesmo comportamento dentro da função então: c =", c)
}
exemplo()

//Para let não tem o efeito hoisting
//console.log(v) //Cannot access 'v' before initialization
let v = 33
console.log(v)

