function A() {}
A.prototype.num = 5;

const a1 = new A();
const a2 = new A();

a1.num = 10;
delete a1.num;

console.log(a1.num === a2.num);
