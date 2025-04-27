//findSecondLargest
function findSecondLargest(arr) {
    if (arr.length <= 1) return null;
    let largest = arr[0];
    let secondlargest = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondlargest = largest;
            largest = arr[i];
        }
        else if (arr[i] < largest && arr[i] > secondlargest) secondlargest = arr[i];
    }
    return secondlargest;
}
console.log(findSecondLargest([1, 2, 3, 4, 5]))