const obj = {
    name: "Riya",
    greet: function () {
      console.log(this.name);
    },
  };
  
  const greetFn = obj.greet;
  greetFn();
  