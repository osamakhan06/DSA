function linearsearch(arr,target){
    for(let i=0; i< arr.length;i++){
        if(arr[i]==target){
            return arr[i]
        }
        
    }
    return -1

}

console.log(linearsearch([1,2,10,5,6],10))
console.log(linearsearch([1,2,10,5,6],20))
