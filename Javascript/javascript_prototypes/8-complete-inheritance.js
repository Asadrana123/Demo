// 8-complete-inheritance.js
// ===================
// COMPLETE INHERITANCE PATTERN
// ===================

// This file presents a complete inheritance pattern that combines
// constructor stealing and prototype chain inheritance - often called
// "Parasitic Combination Inheritance"

// PARENT CONSTRUCTOR
// -----------------

function Person(name, age) {
    // Instance properties
    this.name = name;
    this.age = age;
    this.friends = []; // Reference type property
  }
  
  // Parent methods
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  Person.prototype.haveBirthday = function() {
    this.age++;
    console.log(`${this.name} is now ${this.age} years old`);
  };
  
  // CHILD CONSTRUCTOR
  // ---------------
  
  function Student(name, age, school) {
    // Call parent constructor with current context
    // This is called "constructor stealing" - it copies parent properties
    Person.call(this, name, age);
    
    // Child-specific properties
    this.school = school;
    this.grades = [];
  }
  
  // Set up prototype inheritance - creates the prototype chain
  Student.prototype = Object.create(Person.prototype);
  
  // Fix the constructor property
  Student.prototype.constructor = Student;
  
  // Child-specific methods
  Student.prototype.study = function(subject) {
    console.log(`${this.name} is studying ${subject}`);
  };
  
  Student.prototype.addGrade = function(grade) {
    this.grades.push(grade);
  };
  
  Student.prototype.getGPA = function() {
    if (this.grades.length === 0) return 0;
    
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  };
  
  // ANOTHER CHILD OF PERSON
  // ---------------------
  
  function Employee(name, age, company, salary) {
    Person.call(this, name, age);
    this.company = company;
    this.salary = salary;
  }
  
  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee;
  
  Employee.prototype.work = function() {
    console.log(`${this.name} is working at ${this.company}`);
  };
  
  Employee.prototype.receiveSalary = function() {
    console.log(`${this.name} received ${this.salary}`);
  };
  
  // CREATING INSTANCES
  // ----------------
  
  const person = new Person("Alice", 30);
  const student = new Student("Bob", 20, "State University");
  const employee = new Employee("Charlie", 35, "Tech Corp", 75000);
  
  // Test parent methods
  person.greet();   // Hello, my name is Alice
  student.greet();  // Hello, my name is Bob
  employee.greet(); // Hello, my name is Charlie
  
  // Test instance properties
  console.log(person.name);    // Alice
  console.log(student.school); // State University
  console.log(employee.company); // Tech Corp
  
  // Test child methods
  student.study("Math");       // Bob is studying Math
  student.addGrade(85);
  student.addGrade(92);
  console.log(student.getGPA()); // 88.5
  
  employee.work();             // Charlie is working at Tech Corp
  employee.receiveSalary();    // Charlie received 75000
  
  // TESTING INHERITANCE RELATIONSHIPS
  // ------------------------------
  
  console.log(student instanceof Student); // true
  console.log(student instanceof Person);  // true
  console.log(student instanceof Object);  // true
  
  console.log(employee instanceof Employee); // true
  console.log(employee instanceof Person);   // true
  console.log(employee instanceof Student);  // false
  
  // ENSURING PROPER PROPERTY HANDLING
  // ------------------------------
  
  // Reference type properties are properly instance-specific
  person.friends.push("David");
  student.friends.push("Emma");
  employee.friends.push("Frank");
  
  console.log(person.friends);   // ["David"]
  console.log(student.friends);  // ["Emma"]
  console.log(employee.friends); // ["Frank"]
  
  // CREATING A HELPER FUNCTION
  // ------------------------
  
  // The inheritance pattern can be abstracted into a helper function
  function inheritFrom(Child, Parent) {
    // Set up the prototype chain
    Child.prototype = Object.create(Parent.prototype);
    // Fix the constructor property
    Child.prototype.constructor = Child;
  }
  
  // Using the helper function
  function Teacher(name, age, subject) {
    Person.call(this, name, age);
    this.subject = subject;
  }
  
  inheritFrom(Teacher, Person);
  
  Teacher.prototype.teach = function() {
    console.log(`${this.name} is teaching ${this.subject}`);
  };
  
  const teacher = new Teacher("Grace", 45, "Computer Science");
  teacher.greet();  // Hello, my name is Grace
  teacher.teach();  // Grace is teaching Computer Science
  
  // CREATING MULTI-LEVEL INHERITANCE
  // -----------------------------
  
  // We can create deeper inheritance chains
  function GraduateStudent(name, age, school, researchTopic) {
    Student.call(this, name, age, school);
    this.researchTopic = researchTopic;
  }
  
  inheritFrom(GraduateStudent, Student);
  
  GraduateStudent.prototype.research = function() {
    console.log(`${this.name} is researching ${this.researchTopic}`);
  };
  
  const gradStudent = new GraduateStudent("Hank", 25, "Tech University", "AI");
  gradStudent.greet();    // Hello, my name is Hank
  gradStudent.study("Advanced Algorithms"); // Hank is studying Advanced Algorithms
  gradStudent.research(); // Hank is researching AI
  
  // OVERRIDING METHODS
  // ----------------
  
  // Child classes can override parent methods
  Student.prototype.greet = function() {
    console.log(`Hi, I'm ${this.name}, a student at ${this.school}`);
  };
  
  // Create a new student to see the overridden method
  const student2 = new Student("Ivy", 19, "Community College");
  student2.greet(); // Hi, I'm Ivy, a student at Community College
  
  // Calling the parent method from the overridden method
  GraduateStudent.prototype.greet = function() {
    // Call the parent method using call()
    Student.prototype.greet.call(this);
    console.log(`I'm researching ${this.researchTopic}`);
  };
  
  gradStudent.greet();
  // Hi, I'm Hank, a student at Tech University
  // I'm researching AI
  
  // ADDING INSTANCE METHODS AFTER CREATION
  // -----------------------------------
  
  // Note that we can still add methods to individual instances
  student.introduce = function() {
    console.log(`Special introduction for ${this.name}`);
  };
  
  student.introduce(); // Special introduction for Bob
  
  // But other Student instances won't have it
  try {
    student2.introduce(); // Error: student2.introduce is not a function
  } catch (e) {
    console.log("As expected, other instances don't have instance-specific methods");
  }
  
  // SUMMARY OF THE COMPLETE INHERITANCE PATTERN
  // ----------------------------------------
  
  // 1. Use Constructor Stealing to inherit instance properties
  //    - Child calls Parent.call(this, ...args) in its constructor
  //    - This copies all properties (including reference types)
  
  // 2. Use Prototype Chain Inheritance to inherit methods
  //    - Child.prototype = Object.create(Parent.prototype)
  //    - This establishes the prototype chain
  
  // 3. Fix the constructor property
  //    - Child.prototype.constructor = Child
  
  // 4. Add Child-specific methods to Child.prototype
  //    - Child.prototype.newMethod = function() {...}
  
  // This pattern provides:
  // - Proper instance property inheritance (no sharing of reference properties)
  // - Method reuse through the prototype chain
  // - Proper prototype chain for instanceof
  // - Correct constructor property references
  
  // In ES6, this pattern is encapsulated in the class/extends syntax
  // which we'll explore in the next file.