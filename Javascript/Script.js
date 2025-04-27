function Animal() {
    this.type = 'Animal';
  }
  
  Animal.prototype.sayType = function() {
    console.log(this.type);
  };
  
  function Dog() {
    Animal.call(this);
    this.breed = 'Labrador';
  }
  
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  const dog = new Dog();
  console.log(dog)