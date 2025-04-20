console.log(JSON.stringify([1, 2, null, 3]))
//null is a valid JSON value and is preserved.

console.log(JSON.stringify([1, 2, undefined, 3]))
//undefined is not a valid value in JSON.
//When JSON.stringify() processes an array, any undefined values are automatically converted to null.

console.log(JSON.stringify({ a: 1, b: undefined, c: 2 }));
//In objects, properties with undefined values are removed entirely.

console.log(null === undefined)

/*This uses the strict equality operator (===), which checks:
Value
Type
So in this case:
null is a special primitive type that represents "no value".
undefined is a separate primitive type that means "not defined".*/

console.log(null==undefined)
/*Even though they're different types, JavaScript treats them as loosely equal because they both 
represent "absence of value" in different ways.*/

console.log(null == 0)
/*There's no coercion from null to 0 when using == with a number.*/

console.log(null < 0)
/*When using relational operators like <, JavaScript tries to convert both operands to numbers:*/

console.log(undefined == 0)
/*JavaScript does not coerce undefined to a number when using == 
(unlike null which gets treated specially in certain cases).*/

console.log(undefined < 0)
//in compare operator it convert it into NaN