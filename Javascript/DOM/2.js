// Selecting Elements in the DOM:-
// To manipulate something on a webpage using JavaScript, you first need to select it.
document.getElementById('id')
// This selects a single element by its id attribute.

document.querySelector('selector')
// This selects the first element that matches a CSS selector.
// 🔹 Tag selector
document.querySelector("h1");             // First <h1> element
document.querySelector("button");         // First <button> element

// 🔹 ID selector
document.querySelector("#save");          // Element with id="save"
document.querySelector("#main-header");   // Element with id="main-header"

// 🔹 Class selector
document.querySelector(".btn");           // First element with class="btn"
document.querySelector(".active");        // First element with class="active"

// 🔹 Attribute selector
document.querySelector('[type="text"]');  // First input with type="text"
document.querySelector('[disabled]');     // First element with 'disabled' attribute
document.querySelector('[data-role="admin"]'); // Element with data-role="admin"

// 🔹 Descendant selector
document.querySelector("div p");          // First <p> inside any <div>
document.querySelector("ul li");          // First <li> inside any <ul>

// 🔹 Child selector
document.querySelector("ul > li");        // First <li> directly inside a <ul>

// 🔹 Pseudo-classes
document.querySelector("li:first-child"); // First <li> in its parent
document.querySelector("input:checked");  // First checked radio/checkbox
document.querySelector("p:nth-of-type(2)"); // Second <p> among siblings of same type

// 🔹 Combined selectors
document.querySelector("div.card .title"); // .title inside .card inside a <div>
document.querySelector("form#loginForm input[type='email']"); // Email input inside a form with ID
//Separating them like form #loginForm would search for an element with id="loginForm" inside any <form>.


// 2. Select by Class Name
document.getElementsByClassName("myClass");  // Select all elements with class="myClass"

// 3. Select by Tag Name
document.getElementsByTagName("div");  // Select all <div> elements



document.querySelectorAll(".myClass");  // All elements with class="myClass"

// 6. Select all <form> elements
document.forms;  // All <form> elements in the document

// 7. Select all <img> elements
document.images;  // All <img> elements in the document

// 8. Select all <a> elements with href attribute
document.links;  // All <a> elements with href in the document

