const arr = [1, 2, 3];

arr.push(4);      // Line A
arr[0] = 99;      // Line B
arr = [5, 6, 7];  // Line C

console.log(arr);
