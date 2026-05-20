// if power of two --> the number comes from the 2 multiplication  aor from the power of 2 i-e 1 ,2, 4, 8 etc


// function isPowerOfTwo(n){
//     if(n<2){
//         return false
//     }
//     while(n>1){
//         if(n % 2 !== 0){
//             return false

//         }
//         n = n/2
//     }
//     return true

// }

// console.log(isPowerOfTwo(5))
// console.log(isPowerOfTwo(4))


function isPowerOfTwo(n){
    if (n<1){
        return false
    }
    return (n & (n-1) ) === 0
}
console.log(isPowerOfTwo(5))
console.log(isPowerOfTwo(4))

// n   = 4 → 0100
 // n-1 = 3 → 0011

 // appply &   if one is 0 then it will be 0
 // 0 1 0 0   (4)
//  0 0 1 1   (3)
// -----------
//   0 0 0 0   = 0 ✅

