// Creating Elements Dynamically
// JavaScript lets you create new HTML elements on the fly using the DOM. This is super useful when you
// want to build things like:
const myDiv = document.getElementById('my-id');
const newElement = document.createElement('div');
document.body.append(newElement);
//or
myDiv.append(newElement)


//difference between append and appendChild:-

//appendChild()
// Only accepts a Node (like an element or text node).
// Returns the appended node.
// Cannot append multiple nodes or strings.
// Will throw an error if you try to append a string.
let div = document.createElement("div");
let p = document.createElement("p");
div.appendChild(p); // ✅ works
div.appendChild("Hello"); // ❌ throws error


// append()
// Introduced in modern browsers (DOM Living Standard).
// Can accept multiple arguments, including Node objects and strings.
// Returns nothing.
// More flexible than appendChild.

let div2 = document.createElement("div");
let p2 = document.createElement("p");
div.append(p2, "Hello"); // ✅ works, appends both a node and a string