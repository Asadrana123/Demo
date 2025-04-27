//What is prototype in javascript:-
//Every object in JavaScript has an internal hidden property called [[Prototype]]. 
//This is usually accessible via the __proto__ property (for learning purposes) 
//or using Object.getPrototypeOf().
//When you try to access a property or method on an object, 
//JavaScript first looks for it on the object itself. If it’s not found,
//it will look up the prototype chain — meaning, it will check the object’s prototype, 
//then the prototype’s prototype, and so on, until it either finds the property or reaches 
//the end of the chain (null).
//Where it gets it from depends on how you create the object.
const person = {
  greet: function () {
    console.log("Hello!");
  }
};

const student = {
  name: "John"
};

// Set the prototype of student to person
student.__proto__ = person;

student.greet(); // Hello!
//Here, student doesn’t have a greet method, so JavaScript looks up to its prototype (person)
//and finds greet there.

//Reasons to Avoid Using __proto__
//1.Changes the prototype after the object is created, which breaks engine optimizations.
//2.Leads to slower performance, especially in large-scale apps.