// 3-constructor-functions.js
// ===================
// CONSTRUCTOR FUNCTIONS
// ===================

// Constructor functions are used as templates for creating objects
// By convention, constructor function names start with a capital letter

// Defining a constructor function
function Animal(name, sound) {
    // 'this' refers to the new object being created
    this.name = name;
    this.sound = sound;
    
    // NOTE: Methods defined inside the constructor are recreated for each instance
    // This is inefficient if you create many instances
    this.makeSound = function() {
      console.log(`${this.name} says ${this.sound}!`);
    };
  }
  
  // Creating instances using the 'new' keyword
  const dog = new Animal("Rex", "woof");
  const cat = new Animal("Whiskers", "meow");
  
  dog.makeSound(); // Rex says woof!
  cat.makeSound(); // Whiskers says meow!
  
  // What happens when we use 'new' with a constructor function:
  // 1. A new empty object is created
  // 2. The function is called with 'this' set to the new object
  // 3. The object's [[Prototype]] is set to the constructor's prototype property
  // 4. If the function doesn't return an object, the new object is returned automatically
  
  // PROTOTYPE PROPERTY
  // -----------------
  
  // Every function in JavaScript automatically gets a 'prototype' property
  // This property is an object that becomes the prototype of instances created with the function
  
  console.log(typeof Animal.prototype); // "object"
  
  // The prototype object has a 'constructor' property that points back to the function
  console.log(Animal.prototype.constructor === Animal); // true
  
  // Adding methods to the prototype is more efficient
  // The method is defined once and shared by all instances
  Animal.prototype.describe = function() {
    console.log(`This animal is called ${this.name}`);
  };
  
  // Both instances can use the new method
  dog.describe(); // This animal is called Rex
  cat.describe(); // This animal is called Whiskers
  
  // PROTOTYPE CHAIN WITH CONSTRUCTOR FUNCTIONS
  // -----------------------------------------
  
  // Let's verify the prototype relationships
  console.log(dog.__proto__ === Animal.prototype); // true
  console.log(cat.__proto__ === Animal.prototype); // true
  
  // The prototype chain:
  // dog → Animal.prototype → Object.prototype → null
  // cat → Animal.prototype → Object.prototype → null
  
  // IMPORTANT: Animal.prototype is NOT Animal's prototype
  // It's the object that becomes the prototype of instances created with new Animal()
  console.log(Animal.__proto__ === Animal.prototype); // false
  console.log(Animal.__proto__ === Function.prototype); // true
  
  // The complete prototype chain for the constructor:
  // Animal → Function.prototype → Object.prototype → null
  
  // CHECKING INSTANCE RELATIONSHIPS
  // -----------------------------
  
  // The instanceof operator checks if an object is an instance of a constructor
  console.log(dog instanceof Animal); // true
  console.log(dog instanceof Object); // true
  console.log(Animal instanceof Function); // true
  
  // DEMONSTRATING THE DIFFERENCE BETWEEN METHODS
  // ------------------------------------------
  
  // Let's compare methods defined in the constructor vs on the prototype
  
  function Person(name) {
    this.name = name;
    
    // Method defined inside constructor - each instance gets its own copy
    this.greetInstance = function() {
      console.log(`Hello, I'm ${this.name} (instance method)`);
    };
  }
  
  // Method defined on prototype - shared by all instances
  Person.prototype.greetPrototype = function() {
    console.log(`Hello, I'm ${this.name} (prototype method)`);
  };
  
  const person1 = new Person("Alice");
  const person2 = new Person("Bob");
  
  // Both methods work the same way
  person1.greetInstance();   // Hello, I'm Alice (instance method)
  person1.greetPrototype();  // Hello, I'm Alice (prototype method)
  
  // But they're stored differently:
  console.log(person1.greetInstance === person2.greetInstance); // false - different functions
  console.log(person1.greetPrototype === person2.greetPrototype); // true - same function
  
  // Memory efficiency:
  // - person1 and person2 each have their own greetInstance method (2 copies)
  // - Both share a single greetPrototype method (1 copy)
  
  // This becomes important for performance when creating many objects
  
  // FORGETTING 'NEW' WITH CONSTRUCTOR FUNCTIONS
  // -----------------------------------------
  
  // What happens if we forget the 'new' keyword?
  function Car(make) {
    this.make = make;
  }
  
  // With 'new' - creates a new object
  const car1 = new Car("Toyota");
  console.log(car1.make); // Toyota
  
  // Without 'new' - 'this' points to the global object (or undefined in strict mode)
  // This can cause bugs and unintended global pollution
  const car2 = Car("Honda");
  console.log(car2); // undefined - the function doesn't return anything
  
  // In a browser environment, this would happen:
  // console.log(window.make); // Honda - accidentally created a global variable!
  
  // A common pattern to prevent this issue
  function SafeCar(make) {
    // If this function is called without 'new', 'this' won't be a SafeCar instance
    if (!(this instanceof SafeCar)) {
      return new SafeCar(make);
    }
    this.make = make;
  }
  
  const car3 = SafeCar("Tesla"); // Still works even without 'new'
  console.log(car3.make); // Tesla