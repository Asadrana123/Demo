//Object.create():
// Creates a new object with a specified prototype.
// Object.create(prototype);
//meaning 
function Animal() {
    this.type = 'Animal';
}
Animal.prototype.sayType = function () {
    console.log(this.type);
};
function Dog() {
     Animal.call(this);
//Animal.call(this); manually copies properties from Animal constructor into this (the Dog object).
    this.breed = 'Labrador';
}
Dog.prototype = Object.create(Animal.prototype);
//if you do Dog.prototype = Object.create(Animal);
//then you are setting Animal as its prototype
Dog.prototype.constructor = Dog;
const dog = new Dog();
dog.sayType();
console.log(dog instanceof Dog);
console.log(dog instanceof Animal);
console.log(dog.constructor === Dog);
console.log(dog.constructor === Animal);
