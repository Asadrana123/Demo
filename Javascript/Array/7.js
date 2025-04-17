const original = [{a: 1}, {b: 2}];
const copy = [...original];

copy[0].a = 100;

console.log(original[0].a); // ?
