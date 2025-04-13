/*In JavaScript, objects are collections of key-value pairs, where the keys are strings (or Symbols) 
and the values can be any type. They are used to store and organize data in a structured way.*/

const obj={
    name:"Asad",
    age:"40"
}
delete obj.age;
console.log(obj);

/*"The delete keyword is used to remove properties from objects. 
It returns true if the property is successfully deleted. However, 
it should not be used to remove elements from arrays,
 as it leaves holes — splice is better for that."*/