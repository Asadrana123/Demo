// function firstNonRepeating(arr) {
//     let output = [];
//     for (let i = 0; i < arr.length; i++) {
//         let index = output.indexOf(arr[i]);
//         if (index === -1) output.push(arr[i]);
//         else output.splice(index, 1);
//     }
//     return output.length>0?output[0]:null
// }
// console.log(firstNonRepeating([7,4, 5, 1, 2, 1, 5, 4]))

function firstNonRepeating(arr) {
    let countMap = new Map();

    // Count occurrences of each element
    for (let i = 0; i < arr.length; i++) {
        countMap.set(arr[i], (countMap.get(arr[i]) || 0) + 1);
    }

    // Find the first element that appears exactly once
    for (let i = 0; i < arr.length; i++) {
        if (countMap.get(arr[i]) === 1) {
            return arr[i];
        }
    }

    return null; // Return null if no non-repeating element is found
}

console.log(firstNonRepeating([7, 4, 5, 1, 2, 1, 5, 4])); // Output: 7
