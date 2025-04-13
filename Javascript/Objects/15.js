const original={
   name:"Asad",
   address:{city:"delhi"}
}
const deepCopy=structuredClone(original)
deepCopy.name="Asad";
deepCopy.address.city="MZN";

console.log(original.name);
console.log(original.address.city)