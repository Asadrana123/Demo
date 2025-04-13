function Person(name) {
    this.name = name;
    this.sayName = function () {
      console.log(`Regular: ${this.name}`);
    };
    this.sayNameArrow = () => {
      console.log(`Arrow: ${this.name}`);
    };
  }
  
  const person1 = new Person("Alice");
  
  const person2 = {
    name: "Bob",
    sayName: person1.sayName,
    sayNameArrow: person1.sayNameArrow,
  };
  
  person2.sayName();       // ❓
  person2.sayNameArrow();  // ❓
  