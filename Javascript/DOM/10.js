//Event delegation in JavaScript is a technique that allows you to handle events at a higher level in 
//the DOM rather than attaching individual event listeners to each target element.
document.getElementById("parent-list").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      alert("You clicked on " + event.target.textContent);
    }
  });