const obj1 = {
    name: "Alice",
    greet() {
      console.log(this.name);
    }
  };
  
  const obj2 = {
    name: "Bob"
  };
  

obj2.greet=obj1.greet;
obj2.greet()
