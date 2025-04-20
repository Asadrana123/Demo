const original = [{a: 1}, {b: 2}];
const copy = [...original];

copy[0].a = 100;

console.log(original[0].a); // ?
// //A shallow copy duplicates only the top-level properties.
// If there are nested objects, both the original and the copy still reference the same nested object.
