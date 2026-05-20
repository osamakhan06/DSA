function recursiveFebonocci(n)
{
   if(n<2){
    return n
   }
   return recursiveFebonocci(n-1) + recursiveFebonocci(n-2)
}

console.log(recursiveFebonocci(7))
console.log(recursiveFebonocci(5))
