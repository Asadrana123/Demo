//Prototypes with Constructor Functions
//In JavaScript, functions (when used as constructors with the new keyword) automatically 
// get a special property called .prototype.
//This .prototype property is not the prototype of the function itself, but it becomes 
// the prototype of all objects created using that function.
function Animal(sound) {
    this.sound = sound;
}

Animal.prototype.speak = function () {
    console.log(this.sound);
};

const dog = new Animal("Bark");
dog.speak();
console.log(dog.__proto__ === Animal.prototype);
