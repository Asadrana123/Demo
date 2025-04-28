// 2-prototype-intro.js
// ===================
// INTRODUCTION TO PROTOTYPES
// ===================

// Every object in JavaScript has an internal property called [[Prototype]]
// This is the foundation of JavaScript's prototypal inheritance

// Creating two simple objects
const person = {
    isHuman: true,
    greet: function() {
      console.log("Hello!");
    }
  };
  
  const student = {
    name: "John",
    study: function() {
      console.log("Studying...");
    }
  };
  
  // PROTOTYPE CHAIN BASICS
  // ----------------------
  
  // Let's set up a prototype relationship:
  // student's prototype will be person
  // NOTE: __proto__ is used here for learning purposes but should be avoided in production code
  student.__proto__ = person;
  
  // Now student can access properties and methods from person
  console.log(student.name);     // John (own property)
  console.log(student.isHuman);  // true (inherited from person)
  student.study();               // Studying... (own method)
  student.greet();               // Hello! (inherited from person)
  
  // When accessing a property/method, JavaScript:
  // 1. Looks for it on the object itself
  // 2. If not found, looks in the object's prototype
  // 3. If not found, looks in the prototype's prototype...
  // 4. ...and so on until it reaches the end of the chain (null)
  
  // Let's verify the prototype chain
  console.log(student.__proto__ === person); // true
  console.log(person.__proto__ === Object.prototype); // true
  console.log(Object.prototype.__proto__ === null); // true - end of the chain
  
  // The complete prototype chain:
  // student → person → Object.prototype → null
  
  // PROPERTY SHADOWING
  // ------------------
  
  // What happens when properties have the same name?
  person.name = "Default Person";
  console.log(student.name); // Still "John" - own properties take precedence
  
  student.isHuman = false;
  console.log(student.isHuman); // false - shadows the property from person
  console.log(person.isHuman);  // true - the original is unchanged
  
  // MODERN WAYS TO WORK WITH PROTOTYPES
  // ----------------------------------
  
  // __proto__ was not standardized until ES6 and has performance issues
  // Here are the proper methods to work with prototypes:
  
  // Getting an object's prototype
  const studentProto = Object.getPrototypeOf(student);
  console.log(studentProto === person); // true
  
  // Setting an object's prototype
  const teacher = {
    subject: "Math"
  };
  
  // Instead of teacher.__proto__ = person
  Object.setPrototypeOf(teacher, person);
  
  console.log(teacher.isHuman); // true
  teacher.greet(); // Hello!
  
  // Creating a new object with a specific prototype
  const graduate = Object.create(student);
  graduate.degree = "Masters";
  
  console.log(graduate.name);    // John (from student)
  console.log(graduate.isHuman); // false (from student, which shadows person)
  console.log(graduate.degree);  // Masters (own property)
  
  // The prototype chain is now:
  // graduate → student → person → Object.prototype → null
  
  // CHECKING THE PROTOTYPE CHAIN
  // ---------------------------
  
  // The instanceof operator checks if an object's prototype chain includes a constructor's prototype
  function Person() {}
  const genericPerson = new Person();
  
  console.log(genericPerson instanceof Person); // true
  console.log(genericPerson instanceof Object); // true
  
  // For direct objects, isPrototypeOf checks if an object is in another's prototype chain
  console.log(person.isPrototypeOf(student));   // true
  console.log(student.isPrototypeOf(graduate)); // true
  console.log(person.isPrototypeOf(graduate));  // true
  
  // REASONS TO AVOID __proto__ IN PRODUCTION CODE
  // --------------------------------------------
  // 1. Performance - changes to [[Prototype]] are slow in JS engines
  // 2. Can break optimizations in JavaScript engines
  // 3. Not fully compatible with all JS environments
  // 4. It was non-standard before ES6
  
  // Next, we'll explore constructor functions and how they relate to prototypes