function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)  // ✅ fixed
        if (target == arr[middleIndex]) {
            return arr[middleIndex]
        } if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

console.log(binarySearch([2,3,6,7,30], 6))   // ✅ sorted array → 6
console.log(binarySearch([2,4,5,6,7], 10))   // ✅ sorted array → -1