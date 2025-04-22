const user = {
    name: "Sonia",
    sayHi: function() {
      console.log("Hi " + this.name);
    }
  };
  
setTimeout(user.sayHi.bind(user), 1000); 
// we can use bind method in settimeout to bind the context, We can maintain this context in callbacks using bind 