//  "use strict" /**diretiva para resolver problemas do this.Neste ela trata
// // o this dentro de uma function expression passa a ser undefined o que antes
// //  era objeto global window Obs: se comentar essa diretiva o comportamento
// //   do this é alteradoObs:acompanhar o comportamento no browser ultiliando
// // o live server **/
exports.teste = {
    "ola" : "mundo do commonJS index.js"
}

console.log("this fora da funções -->",this)
console.log("globalThis")
console.log( globalThis)
//globalThis recurso para o dev execssar objeto globalmente

// import { teste } from "./mod1.js";
const teste = require('./mod1.js')
console.log('usando o método commonJS',teste)


function fnExpression() {
  console.log("this dentro de function expression")
  console.log(this);
}
fnExpression();

const fnArrow = () => {
  console.log("this dentro de arrow function")
  console.log(this);
};
fnArrow();


/**Ou seja quando é abilitado o sistema de módulos no browser
ele sempre vai armazenar undefined**/
