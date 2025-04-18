const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1[5] = 10;
arr2[10] = 20;

const result = arr1.concat(arr2);

console.log(result.length);
console.log(result);
