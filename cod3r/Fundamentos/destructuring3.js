function rand ({min = 50, max = 1000} = {}){
    var number = (max - min) + min
    const valor = Math.random() * number 
    return Math.floor(valor)
    
}


console.log(rand({max:100,min:90}))
const obj = { max:50, min:40}
console.log(rand(obj))
console.log(rand({min:955}))
console.log(rand({}))
console.log(rand())