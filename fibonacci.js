function getFibonacci (num) { 
let fibonacci = []
fibonacci [0] = 0
fibonacci [1] = 1 
for (let i = 2; i<=num; i++){
    fibonacci[i] = fibonacci[i-2] + fibonacci [i-1]

} 

return fibonacci[num]
} 
let result = getFibonacci(7)
console.log(result)


//0,1,1,2,3,5,8,13,21,