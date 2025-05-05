//The real power of DOM manipulation comes when your page can respond to user actions — clicks, typing, 
//hovering, etc. These are called events.
// click	When an element is clicked
// mouseover	When mouse hovers over element
// keydown	When a key is pressed
// submit	When a form is submitted
// input	When typing into an input box
// Mouse Events in the DOM
element.addEventListener('click', handler);          // Fires when an element is clicked
element.addEventListener('dblclick', handler);       // Fires when an element is double-clicked
element.addEventListener('mousedown', handler);      // Fires when mouse button is pressed down
element.addEventListener('mouseup', handler);        // Fires when mouse button is released
element.addEventListener('mouseenter', handler);     // Fires when mouse enters the element (does not bubble)
element.addEventListener('mouseleave', handler);     // Fires when mouse leaves the element (does not bubble)
element.addEventListener('mouseover', handler);      // Fires when mouse enters the element or its children
element.addEventListener('mouseout', handler);       // Fires when mouse leaves the element or its children
element.addEventListener('mousemove', handler);      // Fires when mouse is moved inside the element
element.addEventListener('contextmenu', handler);    // Fires when right-click menu is triggered
