// 1-objects-basics.js
// ===================
// INTRODUCTION TO JAVASCRIPT OBJECTS
// ===================

// Objects are collections of key-value pairs (properties and methods)
// They are fundamental to JavaScript - almost everything is an object

// Creating an object using object literal notation
const person = {
    // Properties
    name: "Alice",
    age: 30,
    
    // Methods (functions as properties)
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  // Accessing properties using dot notation
  console.log(person.name); // Alice
  console.log(person.age);  // 30
  
  // Accessing properties using bracket notation (useful for dynamic keys)
  console.log(person["name"]); // Alice
  
  // Calling methods
  person.greet(); // Hello, my name is Alice
  
  // Adding new properties and methods dynamically
  person.location = "New York";
  person.sayAge = function() {
    console.log(`I am ${this.age} years old`);
  };
  
  person.sayAge(); // I am 30 years old
  
  // Modifying properties
  person.age = 31;
  console.log(person.age); // 31
  
  // Deleting properties
  delete person.location;
  console.log(person.location); // undefined
  
  // Checking if a property exists
  console.log("name" in person); // true
  console.log("location" in person); // false
  
  // Iterating through properties
  console.log("Properties of person object:");
  for (let key in person) {
    // Check if the property belongs to the object itself, not its prototype
    if (person.hasOwnProperty(key)) {
      console.log(`${key}: ${typeof person[key] === 'function' ? '[Function]' : person[key]}`);
    }
  }
  
  // Another way to create objects: Object constructor
  const car = new Object();
  car.make = "Toyota";
  car.model = "Corolla";
  car.year = 2020;
  car.displayInfo = function() {
    console.log(`${this.make} ${this.model} (${this.year})`);
  };
  
  car.displayInfo(); // Toyota Corolla (2020)
  
  // Object.keys() returns an array of all own enumerable property names
  console.log(Object.keys(car)); // ["make", "model", "year", "displayInfo"]
  
  // Object.values() returns an array of all own enumerable property values
  console.log(Object.values(car).filter(value => typeof value !== 'function')); 
  // ["Toyota", "Corolla", 2020]
  
  // This sets the foundation for understanding prototypes
  // Next, we'll explore how objects link to each other through prototypes