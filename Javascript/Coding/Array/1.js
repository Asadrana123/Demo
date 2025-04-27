//findSecondLargest
function findSecondLargest(arr) {
    if (arr.length <= 1) return null;
    let largest = -Infinity;
    let secondlargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondlargest = largest;
            largest = arr[i];
        } else if (arr[i] < largest && arr[i] > secondlargest) {
            secondlargest = arr[i];
        }
    }
    return secondlargest === -Infinity ? null : secondlargest;
}

console.log(findSecondLargest([5, 4, 3, 2, 1])); // Output: 4
