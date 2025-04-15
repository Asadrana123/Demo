class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  const p1 = new Person("Riya", 24);
  p1.greet(); // Output: Hi, my name is Riya and I'm 24 years old.
  