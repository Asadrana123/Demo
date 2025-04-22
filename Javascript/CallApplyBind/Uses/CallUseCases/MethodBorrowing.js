const person1 = {
    name: "Alice",
    greet: function() {
      console.log("Hi, my name is " + this.name);
    }
  };
  
  const person2 = { name: "Bob" };
  
  // Borrow greet method from person1
  person1.greet.call(person2); // Output: Hi, my name is Bob
  