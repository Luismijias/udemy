
// "use strict"

console.log("this fora da funções -->",this)
console.log("globalThis")
console.log( globalThis)
//globalThis recurso para o dev execssar objeto globalmente




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
