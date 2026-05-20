// in febbonocci series the values is started from the  0 and 1 and the previous values the sum of the next values 
// 5 -> 0,1,1,2

function febbonocci(n){
    let feb = [0,1];
    for(i=2;i<n;i++){
        feb[i]= feb[i-1] + feb[i-2]
    }
    return feb;

}

console.log(febbonocci(7))