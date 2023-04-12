

function rand([min = 50, max = 1000]){
    if (min > max) [min, max] = [max, min]
    const intervalo =  (Math.random() * (max - min)) + min
        return Math.floor(intervalo) 
    
}
console.log(rand([]))
console.log(rand([50,40]))
console.log(rand([992]))
console.log(rand([,10]))
// console.log(rand())//undefined is not iterable
