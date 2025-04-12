const person = {
    name: "Riya",
    sayName: function () {
             function greet(){
                console.log(this);
             }
             greet();
    },
};
person.sayName();