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
