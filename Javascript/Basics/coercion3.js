console.log([] == false)
// //An empty array ([]) is coerced to an empty string ('') when compared using ==.

console.log(undefined == false)
// //When comparing undefined to a number, there is no further coercion;

console.log(null == false)
// //null only loosely equals undefined under ==.


console.log(1n == true)
// /*Even though true is coerced to 1, JavaScript doesn't automatically coerce BigInt 
// to Number for this comparison.*/
