// 7-instanceof-prototype-chain.js
// ===================
// INSTANCEOF AND THE PROTOTYPE CHAIN
// ===================

// The instanceof operator tests if an object has a constructor's prototype 
// anywhere in its prototype chain

// BASIC USAGE OF INSTANCEOF
// -----------------------

function Animal() {}
function Dog() {}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog();

console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true
console.log(dog instanceof Object); // true
console.log(dog instanceof Array);  // false

// HOW INSTANCEOF WORKS
// ------------------

// The instanceof operator searches up the prototype chain:
// 1. It checks if Constructor.prototype appears anywhere in obj's prototype chain
// 2. Returns true if found, false otherwise

// Let's implement a simplified version to understand it better
function myInstanceof(obj, Constructor) {
  // Get the prototype of the object
  let objProto = Object.getPrototypeOf(obj);
  
  // Get the prototype of the constructor
  const constructorProto = Constructor.prototype;
  
  // Keep going up the prototype chain
  while (objProto !== null) {
    if (objProto === constructorProto) {
      return true;
    }
    objProto = Object.getPrototypeOf(objProto);
  }
  
  return false;
}

// Test our implementation
console.log(myInstanceof(dog, Dog));    // true
console.log(myInstanceof(dog, Animal)); // true
console.log(myInstanceof(dog, Object)); // true
console.log(myInstanceof(dog, Array));  // false

// THE ROLE OF THE PROTOTYPE CHAIN IN INSTANCEOF
// -------------------------------------------

// Only the prototype chain matters for instanceof, not the constructor function itself
// Let's demonstrate this:

function A() {}
A.prototype.x = 10;

function B() {
  this.y = 20;
}

// Different approaches to inheritance have different effects on instanceof:

// APPROACH 1: B.prototype = Object.create(A.prototype)
// This sets up proper inheritance
B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;

const b1 = new B();
console.log(b1 instanceof B); // true
console.log(b1 instanceof A); // true
console.log(b1.x); // 10 (inherited from A.prototype)
console.log(b1.y); // 20 (own property)

// APPROACH 2: B.prototype = A.prototype
// This makes both constructors share the exact same prototype object
function C() {
  this.z = 30;
}
C.prototype = A.prototype; // direct reference, not a new object!

const c1 = new C();
console.log(c1 instanceof C); // true
console.log(c1 instanceof A); // true - this can be surprising

// The problem: changes to C.prototype affect A.prototype!
C.prototype.sharedMethod = function() {
  console.log("I affect both C and A prototypes!");
};

const a1 = new A();
console.log(typeof a1.sharedMethod); // "function" - A was affected by change to C!

// APPROACH 3: No relationship
function D() {}
// D keeps its default prototype

const d1 = new D();
console.log(d1 instanceof D); // true
console.log(d1 instanceof A); // false - no relationship in prototype chain

// MANIPULATING PROTOTYPES AFFECTS INSTANCEOF
// ---------------------------------------

// Since instanceof is based on the prototype chain, changing an object's
// prototype will affect instanceof results

function Vehicle() {}
function Car() {}

// Initially, no inheritance relationship
const myCar = new Car();
console.log(myCar instanceof Vehicle); // false

// Establish the relationship after object creation
Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

// Now the test passes
console.log(myCar instanceof Vehicle); // true

// We can even break the relationship for a specific object
Object.setPrototypeOf(myCar, Object.prototype);
console.log(myCar instanceof Car);     // false - relationship broken
console.log(myCar instanceof Vehicle); // false - relationship broken

// USING INSTANCEOF WITH BUILT-IN TYPES
// ----------------------------------

const arr = [1, 2, 3];
const str = "hello";
const num = 42;
const bool = true;
const obj = {};
const func = function() {};
const date = new Date();
const regex = /abc/;

console.log(arr instanceof Array);    // true
console.log(str instanceof String);   // false - primitive!
console.log(num instanceof Number);   // false - primitive!
console.log(bool instanceof Boolean); // false - primitive!
console.log(obj instanceof Object);   // true
console.log(func instanceof Function); // true
console.log(date instanceof Date);    // true
console.log(regex instanceof RegExp); // true

// Why primitives return false:
// Primitives are not objects and don't have prototypes
// But their constructor wrappers can be used with instanceof:

const strObj = new String("hello");
console.log(strObj instanceof String); // true

// LIMITATIONS OF INSTANCEOF
// -----------------------

// 1. Cross-frame/window issues - instanceof fails across different execution contexts
// 2. Doesn't work reliably with objects from different realms (iframes, etc.)
// 3. Can be problematic with complex inheritance hierarchies

// Alternative: Using Object.prototype.isPrototypeOf
const isInstanceOf = function(obj, Constructor) {
  return Constructor.prototype.isPrototypeOf(obj);
};

console.log(isInstanceOf(dog, Dog));    // true
console.log(isInstanceOf(dog, Animal)); // true

// WHEN TO USE INSTANCEOF
// --------------------

// 1. Type checking in inheritance hierarchies
// 2. Ensuring objects are of expected types before operations
// 3. Implementing polymorphic behavior

// Example: Type-safe function
function processAnimal(animal) {
  if (!(animal instanceof Animal)) {
    throw new TypeError('Expected an Animal');
  }
  // Process the animal...
  console.log("Processing animal");
}

try {
  processAnimal(dog);  // Works fine
  processAnimal({});   // Throws TypeError
} catch (e) {
  console.log("Error caught:", e.message);
}

// DUCK TYPING AS AN ALTERNATIVE
// ---------------------------

// Instead of instanceof, sometimes checking for capabilities is better
function canBark(obj) {
  return typeof obj.bark === 'function';
}

const dogLike = {
  bark: function() { console.log("Woof!"); }
};

console.log(canBark(dog));     // true (assuming Dog has a bark method)
console.log(canBark(dogLike)); // true (even though not a Dog instance)

// NEXT STEPS
// ---------

// In the next file, we'll put everything together to create a complete
// inheritance pattern with best practices.