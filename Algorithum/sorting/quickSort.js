function quickSort(arr) {
    if(arr.length < 2) {
        return arr
    }

    let pivot = arr[arr.length - 1]
    let leftArray = []
    let rightArray = []

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot) {
            leftArray.push(arr[i])
        } else {
            rightArray.push(arr[i])
        }
    }

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}

let arr = [2, -4, 1, 6, 3]
console.log(quickSort(arr)) // [-4, 1, 2, 3, 6]