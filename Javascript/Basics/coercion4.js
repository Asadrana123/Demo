console.log([] == ![]);
//all objects are truthy value in javascript
//When comparing an object (array is an object) to a primitive (false), JavaScript coerces the object to a primitive.
console.log("5" + true);
console.log(5 == "5");
//JavaScript will attempt to convert one of the values to the type of the other.
console.log([] == false); 
console.log([1] == true); 
console.log(null + 1);          
console.log(undefined + 1);    
console.log( true + 2 + "3" );
console.log( "3" + 2 + true );