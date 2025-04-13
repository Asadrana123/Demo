function Person(name) {
    this.name = name;
    this.sayHello = () => {
        console.log(`Hello, my name is ${this.name}`);
    };
}

const person1 = new Person("Alice");
const person2 = { name: "Bob" };

person2.sayHello = person1.sayHello;

person2.sayHello();
//An arrow function **remembers the this value from where it was
// originally defined, not where it is later used.

//…it will still print "Alice" — because the arrow function
//  was created with this pointing to person1,
//  and that reference is permanently locked in.