const obj = {
    name: "Riya",
    greet: function () {
      console.log(this.name);  // Will print "Riya" because `this` is bound to the object
    },
    greetArrow: () => {
      console.log(this.name);  // Will print `undefined` (global `this`)
    }
  };
  
  obj.greet();     // Logs: "Riya"
  obj.greetArrow();  // Logs: `undefined`

  
  //Even though greetArrow is written inside the object, JavaScript does not treat object literals ({}) 
  // as scopes for this. The arrow function doesn't "see" obj as its scope.