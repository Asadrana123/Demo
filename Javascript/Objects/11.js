const value={number:"10"};

const multiply=(x={...value})=>x.number*=2;

console.log(multiply());
console.log(multiply(value));
console.log(multiply(value));