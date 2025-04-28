// 4-constructor-property.js
// ===================
// THE CONSTRUCTOR PROPERTY
// ===================

// Every object in JavaScript has a constructor property
// It points to the function that was used to create the object

// Let's create a constructor function
function Animal(name) {
    this.name = name;
  }
  
  // Add a method to its prototype
  Animal.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  // Create an instance
  const dog = new Animal('Buddy');
  
  // The constructor property points back to the constructor function
  console.log(dog.constructor === Animal); // true
  
  // How does this work?
  // 1. dog itself doesn't have a constructor property
  // 2. JavaScript looks at dog's prototype (Animal.prototype)
  // 3. Animal.prototype has a constructor property that points to Animal
  
  // Verifying this:
  console.log(dog.hasOwnProperty('constructor')); // false
  console.log(Animal.prototype.hasOwnProperty('constructor')); // true
  console.log(Animal.prototype.constructor === Animal); // true
  
  // USING THE CONSTRUCTOR PROPERTY
  // -----------------------------
  
  // The constructor property can be useful for creating more objects of the same type
  const dog2 = new dog.constructor('Max');
  dog2.sayHello(); // Hello, my name is Max
  
  // It's also useful for checking the type of an object
  function Person(name) {
    this.name = name;
  }
  
  const person = new Person('Alice');
  
  console.log(person.constructor === Person); // true
  console.log(dog.constructor === Person); // false
  
  // BROKEN CONSTRUCTOR PROPERTY
  // -------------------------
  
  // The constructor property can get broken when setting up inheritance incorrectly
  function Cat(name) {
    this.name = name;
  }
  
  // WRONG WAY: This breaks the constructor property
  Cat.prototype = {
    // We forgot to include the constructor property here!
    purr: function() {
      console.log('Purr...');
    }
  };
  
  const cat = new Cat('Whiskers');
  console.log(cat.constructor === Cat); // false
  console.log(cat.constructor === Object); // true - not what we want!
  
  // Let's fix it:
  function Bird(name) {
    this.name = name;
  }
  
  // OPTION 1: Add methods individually
  Bird.prototype.fly = function() {
    console.log(`${this.name} is flying`);
  };
  
  // The constructor property is maintained
  const bird1 = new Bird('Polly');
  console.log(bird1.constructor === Bird); // true
  
  // OPTION 2: Override the prototype but preserve the constructor
  function Fish(name) {
    this.name = name;
  }
  
  Fish.prototype = {
    constructor: Fish, // Explicitly set the constructor
    swim: function() {
      console.log(`${this.name} is swimming`);
    }
  };
  
  const fish = new Fish('Nemo');
  console.log(fish.constructor === Fish); // true
  
  // IMPORTANCE IN INHERITANCE
  // -----------------------
  
  // The constructor property becomes especially important when implementing inheritance
  // We'll see this in later files, but here's a preview:
  
  function Animal2(name) {
    this.name = name;
  }
  
  function Dog(name, breed) {
    Animal2.call(this, name);
    this.breed = breed;
  }
  
  // Set up inheritance
  Dog.prototype = Object.create(Animal2.prototype);
  
  // The constructor is now broken!
  const buddy = new Dog('Buddy', 'Golden Retriever');
  console.log(buddy.constructor === Dog); // false
  console.log(buddy.constructor === Animal2); // true - incorrect!
  
  // Fix the constructor property
  Dog.prototype.constructor = Dog;
  
  // Now it's correct
  console.log(buddy.constructor === Dog); // true
  
  // WHY THE CONSTRUCTOR PROPERTY MATTERS
  // ----------------------------------
  
  // 1. Reflection - identifying the type of an object
  // 2. Creating new instances of the same type
  // 3. Framework/library code that needs to check object types
  // 4. Ensuring correct inheritance hierarchies
  
  // Example: Dynamic instance creation based on constructor
  function createSimilarObject(obj, ...args) {
    return new obj.constructor(...args);
  }
  
  const rex = createSimilarObject(buddy, 'Rex', 'German Shepherd');
  console.log(rex.name); // Rex
  console.log(rex.breed); // German Shepherd
  console.log(rex instanceof Dog); // true
  
  // PROPERTY DESCRIPTOR OF CONSTRUCTOR
  // --------------------------------
  
  // By default, the constructor property is non-enumerable
  // This means it won't show up in for...in loops
  
  const constructorDescriptor = Object.getOwnPropertyDescriptor(
    Animal.prototype, 'constructor'
  );
  
  console.log(constructorDescriptor);
  // {
  //   value: [Function: Animal],
  //   writable: true,
  //   enumerable: false,  // Note this is false
  //   configurable: true
  // }
  
  // When manually setting the constructor, you might want to match this behavior
  function Reptile(name) {
    this.name = name;
  }
  
  Reptile.prototype = Object.create(Animal.prototype);
  
  // Make sure constructor is non-enumerable like the original
  Object.defineProperty(Reptile.prototype, 'constructor', {
    value: Reptile,
    enumerable: false, // Match default behavior
    writable: true,
    configurable: true
  });
  
  // NEXT UP
  // -------
  // Next, we'll explore how to implement inheritance with prototypes