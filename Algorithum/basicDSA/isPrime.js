// prime number -> is that number when they have not come from the multiplication of the two number 
// -> 5 is prime and 4 is not the prime number b/c 2*2 = 4

// function isPrime(n){
//     if(n<2){
//         return false
//     }

//     for(i=2;i<n;i++){ // We need to CHECK every number between 2 and n to see if anything divides it
//         if(n% i ===0){
//             return false
//         }
//     }
//     return true

// }

// console.log(isPrime(5))
// console.log(isPrime(4))


function isPrime(n){
    if(n<2){
        return false
    }

    for(i=2;i<Math.sqrt(n);i++){ // We need to CHECK every number between 2 and n to see if anything divides it
        if(n% i ===0){
            return false
        }
    }
    return true

}

console.log(isPrime(5))
console.log(isPrime(4))