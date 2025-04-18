const arr = [1, 2, 3];

arr.length = 5;

arr[4] = 10;
console.log(arr);
const filtered = arr.filter((x) => x !== undefined);

console.log(filtered);
console.log(filtered.length);
