// 5-inheritance-basics.js
// ===================
// INHERITANCE BASICS
// ===================

// JavaScript uses prototypal inheritance rather than classical inheritance
// Let's explore basic inheritance patterns and their strengths/weaknesses

// First, let's create a parent constructor
function Person() {
    this.alive = true;
  }
  
  // Add methods to the parent prototype
  Person.prototype.sayHi = function() {
    console.log('Hi');
  };
  
  Person.prototype.breathe = function() {
    console.log('Breathing...');
  };
  
  // Create a child constructor
  function Employee() {
    this.employed = true;
  }
  
  // APPROACH 1: NAIVE INHERITANCE
  // ----------------------------
  
  // Simply set the child prototype to reference the parent prototype
  // DO NOT USE THIS APPROACH IN PRACTICE - this is for learning purposes only
  Employee.prototype = Person.prototype;
  
  // Add a method to the child prototype
  Employee.prototype.work = function() {
    console.log('Working...');
  };
  
  // Create an instance
  const emp1 = new Employee();
  emp1.sayHi();  // Hi (inherited)
  emp1.work();   // Working...
  
  // PROBLEM: Changes to the child prototype affect the parent prototype
  // Since they're the same object!
  const person1 = new Person();
  person1.work(); // Working... - This is wrong! People shouldn't have work()
  
  console.log("Are the prototypes the same object?", Employee.prototype === Person.prototype); // true
  
  // Let's start over with a clean example
  // -------------------------------------
  
  // Reset constructors
  function Person2() {
    this.alive = true;
  }
  
  Person2.prototype.sayHi = function() {
    console.log('Hi');
  };
  
  function Employee2() {
    this.employed = true;
  }
  
  // APPROACH 2: SETTING PROTOTYPE TO AN INSTANCE
  // -------------------------------------------
  
  // Set child prototype to a new parent instance
  Employee2.prototype = new Person2();
  
  // Add child-specific methods
  Employee2.prototype.work = function() {
    console.log('Working efficiently...');
  };
  
  // Create instances
  const emp2 = new Employee2();
  const person2 = new Person2();
  
  emp2.sayHi();  // Hi (inherited)
  emp2.work();   // Working efficiently...
  
  // The parent prototype is safe
  try {
    person2.work(); // Should throw an error
  } catch (e) {
    console.log("Good! Person2 doesn't have work method");
  }
  
  // BUT there's still an issue: the constructor property is broken
  console.log(emp2.constructor === Employee2); // false
  console.log(emp2.constructor === Person2);   // true - incorrect!
  
  // Fix the constructor property
  Employee2.prototype.constructor = Employee2;
  console.log(emp2.constructor === Employee2); // true
  
  // APPROACH 3: CONSTRUCTOR STEALING (BORROWING)
  // ------------------------------------------
  
  // This technique only inherits properties, not methods
  function Animal(name) {
    this.name = name;
    this.legs = 4;
  }
  
  Animal.prototype.move = function() {
    console.log(`${this.name} is moving`);
  };
  
  function Dog(name, breed) {
    // "Steal" the constructor - call parent constructor with this context
    Animal.call(this, name);
    // Add Dog-specific properties
    this.breed = breed;
  }
  
  // Create an instance
  const dog = new Dog('Rex', 'German Shepherd');
  
  console.log(dog.name);  // Rex - from Animal
  console.log(dog.legs);  // 4 - from Animal
  console.log(dog.breed); // German Shepherd - from Dog
  
  // But the prototype methods are not inherited!
  try {
    dog.move(); // Should throw an error
  } catch (e) {
    console.log("Dog doesn't have the move method from Animal");
  }
  
  // COMBINING APPROACHES
  // ------------------
  
  // Let's create a better version that combines constructor stealing with prototype inheritance
  function Animal2(name) {
    this.name = name;
    this.legs = 4;
  }
  
  Animal2.prototype.move = function() {
    console.log(`${this.name} is moving`);
  };
  
  function Dog2(name, breed) {
    // Steal constructor properties
    Animal2.call(this, name);
    // Add Dog-specific properties
    this.breed = breed;
  }
  
  // Set up prototype inheritance
  Dog2.prototype = new Animal2(); // But this calls the constructor twice!
  Dog2.prototype.constructor = Dog2;
  
  // Add Dog-specific methods
  Dog2.prototype.bark = function() {
    console.log('Woof!');
  };
  
  // Create an instance
  const dog2 = new Dog2('Buddy', 'Labrador');
  
  console.log(dog2.name);  // Buddy
  console.log(dog2.legs);  // 4
  console.log(dog2.breed); // Labrador
  
  dog2.move(); // Buddy is moving
  dog2.bark(); // Woof!
  
  // PROBLEMS WITH APPROACH 3
  // ----------------------
  
  // 1. The Animal2 constructor is called twice:
  //    - Once in Animal2.call(this, name)
  //    - Again in new Animal2()
  // 2. The properties from the parent constructor are duplicated:
  //    - On the Dog2 instance
  //    - On the Dog2.prototype
  // 3. Parameters to the parent constructor must be provided manually
  
  // This is better, but still not ideal
  // In the next file, we'll explore Object.create() as a better approach