//manipulating elements:-


//changing the textcontent:-
const title = document.getElementById('main-title');
title.textContent = 'New Title'; // Changes "Hello World" to "New Title"

//changing the innerHTML:-
//<div id="content">This is <strong>bold</strong> text.</div>
const content = document.getElementById('content');
content.innerHTML = 'This is <em>italic</em> text.'; // Replaces the entire content


//adding or modifying attributes
//<img src="image" id="my-image" al"t="old-image"/>
const element=document.getElementById("image");
console.log(element.getAttribute("src"));
element.setAttribute('src','image.jpg');
