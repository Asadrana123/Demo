console.log(typeof null);   
//This is a well-known JavaScript bug (yes, a real bug that’s never been fixed for backward 
// compatibility reasons).      
console.log(null instanceof Object); 

console.log([] == []);
console.log({} == {});

console.log('5' - 3);  // 2
console.log('5' + 3);  // '53'


const arr = [1, 2, 3, 4, 5];
arr.length = 3;
console.log(arr);  

console.log('3' * ' 02 ');
//The * operator in JavaScript behaves just like - and / — it forces both operands to be numbers, 
// even if they are strings.

