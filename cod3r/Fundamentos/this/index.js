"use strict" /**diretiva para resolver problemas do this.Neste ela trata 
o this dentro de uma function expression passa a ser undefined o que antes
 era objeto global window Obs: se comentar essa diretiva o comportamento
  do this é alterado**/
  import React from 'react';

  <h1>teste</h1>
console.log("this fora da funções -->",this)

function fnExpression(){
    console.log("this dentro de function expression")
    console.log(this)
}
fnExpression()

const fnArrow = () => {
    console.log("this dentro de arrow function")
    console.log(this)
}
fnArrow()