const obj = {
   name: "AsyncJS",
   sayName: function () {
      console.log(this)
      function hello() {
         console.log(this);
      }
      hello.call(this);
   },
};

obj.sayName();
