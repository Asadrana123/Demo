function Person() { }
Person.prototype.sayHi = function () {
    console.log('Hi');
};
function Employee() { }
Employee.prototype = new Person();
console.log(Employee.prototype.constructor)
Employee.prototype.constructor = Employee;
console.log(Employee.prototype.constructor)
//Employee.prototype.__proto__ = Person.prototype
const emp = new Employee();
emp.sayHi();
console.log(emp instanceof Object);
console.log(emp instanceof Person);
console.log(emp instanceof Employee);
console.log(emp.constructor === Employee);
console.log(emp.constructor === Person);
