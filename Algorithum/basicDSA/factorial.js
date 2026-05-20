// factorial of a number is multiplication of a number less than that 
// factorial of 5 is -> 5*4*3*2*1


function factorial(n){
    result = 1 // b/z the factorial of a 0 and 1 is 1 
    for(i=2;i<=n;i++){
        result = result*i


    }
    return result 


}

console.log(factorial(5))