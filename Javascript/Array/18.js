const arr = [1, 2, 3];
const result = arr.map((num, i, array) => {
  array[i + 1] = num * 2;
  return num;
});
console.log(arr);
console.log(result);


