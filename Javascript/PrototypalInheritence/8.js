function Person(name) {
    this.name = name;
}
Person.prototype.greet = function () {
    console.log('Hello, ' + this.name);
};

function Student(name, school) {
    Person.call(this, name);
    this.school = school;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

const student = new Student('John', 'XYZ School');
student.greet();

console.log(student instanceof Person);
console.log(student instanceof Student);
