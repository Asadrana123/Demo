//functionname.constructor---will points to who made this fucntion that is construtor function --Function
//functionname.prototype.construtor--it will point to functionname again because it is for object which will 
//be created using this constructor function
function Person() { }
Person.prototype.sayHi = function () {
    console.log('Hi');
};
function Employee() { }
Employee.prototype = new Person();
Employee.prototype.constructor = Employee;
const emp = new Employee();
emp.sayHi();
console.log(emp instanceof Object);
console.log(emp instanceof Person);
console.log(emp instanceof Employee)
console.log(emp.constructor === Employee);
console.log(emp.constructor === Person);
//emp is an instance of Employee, so emp's [[Prototype]] is Employee.prototype.
//emp --> Employee.prototype --> Person.prototype --> Object.prototype