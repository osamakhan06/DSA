function climbingStairCase(n) {
    let noOfWays = [1, 2];

    for (let i = 2; i < n; i++) {       // start at 2, stop before n
        noOfWays[i] = noOfWays[i-1] + noOfWays[i-2];  // no return here
    }

    return noOfWays[n - 1];             // return after loop ends
}

console.log(climbingStairCase(1)); // 1
console.log(climbingStairCase(2)); // 2
console.log(climbingStairCase(3)); // 3
console.log(climbingStairCase(4)); // 5
console.log(climbingStairCase(5)); // 8
console.log(climbingStairCase(6)); // 8
