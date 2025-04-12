const obj = {
    name: "Riya",
    greet: function () {
      console.log(this.name);
    },
  };
  
  const greetFn = obj.greet;
  greetFn();
  // here we are simply copying the function in a variable 
  