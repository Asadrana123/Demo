const person = {
  greet: function () {
    console.log("Hello!");
  }
};

const student = {
  name: "John"
};

student.__proto__ = person;

student.greet(); 