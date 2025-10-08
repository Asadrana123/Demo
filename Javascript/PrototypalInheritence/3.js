function Animal(sound) {
    this.sound = sound;
}
Animal.prototype.speak = function () {
    console.log(this.sound);
};
const dog = new Animal("Bark");
dog.speak();
console.log(dog.__proto__ === Animal.prototype);
