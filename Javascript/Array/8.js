const arr = [1, 2, 3];

const result = arr.map(num => {
  if (num % 2 === 0) {
    return;
  }
  return num * 2;
});

console.log(result);
