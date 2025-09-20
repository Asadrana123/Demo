//The DOM is an object-based representation of the web page that allows JavaScript to interact
//with and manipulate the content and structure dynamically.
//Think of the DOM as a map of your webpage.

//When your HTML page loads, the browser builds a tree of elements.
// This tree is what JavaScript uses to read or change things on your page (like text, color, etc.).




// Element:
// An element is a specific type of node.
// It refers to the actual HTML tags (like <div>, <p>, <a>, etc.) in the document.
// Elements are a subset of nodes. So, all elements are nodes, but not all nodes are elements.

//1. innerHTML
//What it does: Gets or sets the HTML including tags inside an element.
//Use case: When you want to read or write HTML content (not just plain text).

//2. innerText
//What it does: Gets or sets the visible text (what you see in the browser),
// ignores hidden text, and respects line breaks.
//Use case: When you only care about what's actually displayed to the user.
// Output: "Hello\nWorld"

// 3. textContent
// What it does: Gets or sets all the text inside an element, regardless of visibility or formatting.
// Use case: When you want all text content, even if some of it is hidden with CSS.
// Output: "HelloWorld"