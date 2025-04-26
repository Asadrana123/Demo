// Parent constructor
function Animal(sound) {
    this.sound = sound;
  }
  
  // Add a method to Animal's prototype
  Animal.prototype.speak = function () {
    console.log(this.sound);
  };
  
  // Child constructor
  function Dog(name) {
    // Call parent constructor inside child
    Animal.call(this, "Bark");
    this.name = name;
  }
  
  // Set up prototype chain
  Dog.prototype = Object.create(Animal.prototype);
  
  // Fix constructor reference
  Dog.prototype.constructor = Dog;
  
  // Add new method to Dog
  Dog.prototype.sayName = function () {
    console.log("My name is " + this.name);
  };
  
  const d1 = new Dog("Tommy");
  d1.speak();     // Bark (from Animal)
  d1.sayName();   // My name is Tommy (from Dog)
  