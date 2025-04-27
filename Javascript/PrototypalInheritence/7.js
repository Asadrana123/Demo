// //Difference:
// B.prototype = A.prototype; → Shares the same prototype object (no new object created).
// B.prototype = new A(); → Creates a new object using A, so B.prototype is a new instance, not the exact 
// same object.

//what thing decides that some object is instance of other object or not
// Only one thing decides:
// 👉 Prototype chain 🔥
// If anywhere in the object's prototype chain, the prototype of the constructor appears,
// then instanceof will return true.
// Very simply:
// obj instanceof Constructor → checks:
// Is Constructor.prototype present anywhere in obj's prototype chain?
function A() {}
A.prototype.x = 10;

function B() {
  this.y = 20;
}
B.prototype = A.prototype;

const b = new B();

console.log(b.x);
console.log(b.y);

console.log(b instanceof A);
console.log(b instanceof B);
