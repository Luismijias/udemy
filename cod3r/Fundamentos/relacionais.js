console.log('01)', '1' == 1)//neste caso compara somente o valor
console.log('02)', '1' === 1)//neste caso compara o valor e tipo
console.log('03)', '3' != 3 )//valor
console.log('04)', '3' !== 3)//valor e tipo

console.log('05)',3 < 2 )
console.log('06)',3 > 2 )
console.log('07',3 <= 2)
console.log('08',3 >= 2)

console.log(new Date(0))
console.log(Date())

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', undefined == null)
console.log('13)', undefined === null)

// tópico extra
var data = new Date()
console.log('timestamp em milisegundos==>',data.getTime())//em milisegundos
console.log('timestamp em segundos======>',Math.floor(+new Date() / 1000))
console.log(data.getFullYear())

