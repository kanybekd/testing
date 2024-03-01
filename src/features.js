export function addTwo(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    }
    return 'sorry invalid data types'
}

export function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) {
            return mid
        }
        if (arr[mid] < target) {
            left = mid + 1
        }
        if (arr[mid] > target) {
            right = mid - 1
        }
    }
    return false
}

export function stringCapitalize(string) {
    return string.toUpperCase()
}



// 12313213213

// [length of 10000000]
// for (let i of arr){
//     if (i===target){
//         return index
//     }
// }
// O(N)
