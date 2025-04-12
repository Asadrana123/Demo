const obj = {
    name: "Riya",
    greet: function () {
      const arrow = () => {
        console.log(this.name);
      };
      arrow(); // What is `this` here?
    },
  };
  
  obj.greet(); // 👉 Output: Riya
  