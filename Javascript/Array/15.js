const arr = [1, 2, 3];
arr[10] = 99;

const keys = Object.keys(arr);
const values = Object.values(arr);
const entries = Object.entries(arr);

console.log(keys);
console.log(values);
console.log(entries);
