let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) //neste caso só é true porque só subtrai um do num2 depois da comparação.
console.log(num1 === num2) //agora sim é false.


