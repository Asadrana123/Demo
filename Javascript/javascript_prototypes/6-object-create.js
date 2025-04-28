// 6-object-create.js
// ===================
// OBJECT.CREATE() METHOD
// ===================

// Object.create() was introduced in ES5 as a better way to establish inheritance
// It creates a new object with the specified prototype

// Basic syntax:
// Object.create(prototypeObject, [propertiesObject])

// BASIC USAGE
// ----------

// Create an object with a specific prototype
const personProto = {
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    },
    sayBye: function() {
      console.log('Goodbye!');
    }
  };
  
  // Create a new object with personProto as its prototype
  const john = Object.create(personProto);
  john.name = "John";
  
  john.greet(); // Hello, my name is John
  john.sayBye(); // Goodbye!
  
  // Verify the prototype chain
  console.log(Object.getPrototypeOf(john) === personProto); // true
  
  // CREATING OBJECTS WITH PROPERTIES
  // ------------------------------
  
  // The second parameter of Object.create() lets you define properties
  const jane = Object.create(personProto, {
    name: {
      value: "Jane",
      writable: true,
      enumerable: true,
      configurable: true
    },
    age: {
      value: 28,
      writable: true,
      enumerable: true,
      configurable: true
    }
  });
  
  jane.greet(); // Hello, my name is Jane
  console.log(jane.age); // 28
  
  // INHERITANCE PATTERN WITH OBJECT.CREATE()
  // --------------------------------------
  
  // Parent constructor
  function Animal(name) {
    this.name = name;
  }
  
  // Add methods to parent prototype
  Animal.prototype.sayName = function() {
    console.log(`My name is ${this.name}`);
  };
  
  Animal.prototype.eat = function() {
    console.log(`${this.name} is eating`);
  };
  
  // Child constructor
  function Dog(name, breed) {
    // Call parent constructor with current 'this'
    Animal.call(this, name);
    
    // Add child-specific properties
    this.breed = breed;
  }
  
  // Set up inheritance using Object.create()
  // This creates a new object with Animal.prototype as its prototype
  // Importantly, it doesn't call the Animal constructor
  Dog.prototype = Object.create(Animal.prototype);
  
  // Fix the constructor property
  Dog.prototype.constructor = Dog;
  
  // Now add methods specific to the child
  Dog.prototype.bark = function() {
    console.log('Woof! Woof!');
  };
  
  Dog.prototype.fetch = function() {
    console.log(`${this.name} is fetching`);
  };
  
  // Create an instance
  const rex = new Dog('Rex', 'German Shepherd');
  
  // Use parent methods
  rex.sayName();  // My name is Rex
  rex.eat();      // Rex is eating
  
  // Use child methods
  rex.bark();     // Woof! Woof!
  rex.fetch();    // Rex is fetching
  
  // Access properties
  console.log(rex.name);  // Rex (from Animal constructor)
  console.log(rex.breed); // German Shepherd (from Dog constructor)
  
  // Verify the prototype chain
  console.log(rex.__proto__ === Dog.prototype); // true
  console.log(rex.__proto__.__proto__ === Animal.prototype); // true
  console.log(rex.__proto__.__proto__.__proto__ === Object.prototype); // true
  
  // The full prototype chain:
  // rex → Dog.prototype → Animal.prototype → Object.prototype → null
  
  // Check with instanceof
  console.log(rex instanceof Dog);    // true
  console.log(rex instanceof Animal); // true
  console.log(rex instanceof Object); // true
  
  // OBJECT.CREATE() VS NEW ANIMAL()
  // -----------------------------
  
  // Let's compare two inheritance approaches:
  
  // Approach 1: Child.prototype = new Parent()
  function Parent1() {
    this.parentProperty = "parent1";
  }
  
  function Child1() {
    this.childProperty = "child1";
  }
  
  Child1.prototype = new Parent1();
  Child1.prototype.constructor = Child1;
  
  const child1 = new Child1();
  console.log(child1.parentProperty); // "parent1"
  
  // Approach 2: Child.prototype = Object.create(Parent.prototype)
  function Parent2() {
    this.parentProperty = "parent2";
  }
  
  function Child2() {
    this.childProperty = "child2";
    // Note: We'd need to call Parent2.call(this) here to get parentProperty
  }
  
  Child2.prototype = Object.create(Parent2.prototype);
  Child2.prototype.constructor = Child2;
  
  const child2 = new Child2();
  console.log(child2.parentProperty); // undefined (not inherited from instance)
  
  // We need to call the parent constructor explicitly to get instance properties
  function Child2Fixed() {
    this.childProperty = "child2";
    Parent2.call(this); // Call parent constructor to inherit instance properties
  }
  
  Child2Fixed.prototype = Object.create(Parent2.prototype);
  Child2Fixed.prototype.constructor = Child2Fixed;
  
  const child2Fixed = new Child2Fixed();
  console.log(child2Fixed.parentProperty); // "parent2"
  
  // KEY DIFFERENCES BETWEEN THE APPROACHES
  // ------------------------------------
  
  // 1. Child.prototype = new Parent()
  //    - Parent constructor is executed during inheritance setup
  //    - Instance properties become part of the prototype chain
  //    - Any side effects from the Parent constructor happen during setup
  //    - Parameters can't be passed to the Parent constructor during setup
  
  // 2. Child.prototype = Object.create(Parent.prototype)
  //    - Parent constructor is NOT executed during inheritance setup
  //    - Only prototype methods are inherited automatically
  //    - No side effects during setup
  //    - Must explicitly call Parent.call(this, ...) in Child to inherit instance properties
  //    - This is considered the better pattern because it's more explicit and flexible
  
  // SHARING VS. COPYING REFERENCES
  // ---------------------------
  
  // Another way to understand the difference:
  
  // B.prototype = A.prototype; → Directly shares the same object (changes affect both)
  // B.prototype = new A(); → Creates a new instance with A's prototype in its chain
  // B.prototype = Object.create(A.prototype); → Creates a new empty object with A's prototype in its chain
  
  // OBJECT.CREATE() POLYFILL
  // ----------------------
  
  // For older environments without Object.create(), this is how you could implement it:
  if (!Object.create) {
    Object.create = function(proto) {
      // Create a temporary constructor
      function F() {}
      // Set its prototype to the input object
      F.prototype = proto;
      // Return a new instance
      return new F();
    };
  }
  
  // NOTE: This simple polyfill doesn't handle the property descriptors parameter
  
  // NEXT STEPS
  // ---------
  
  // In the next file, we'll explore the instanceof operator and how it relates to the prototype chain.