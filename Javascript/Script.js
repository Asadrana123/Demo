const obj={
  name:"Asad",
  city:{
      name:"delhi",
      area:"10km"
  }
}
const shallowcopy={...obj};
shallowcopy.name="Rana";
shallowcopy.city.name="muzaffarnagar"
console.log(`shallow name:${shallowcopy.name}`);
console.log(`shallow copy city name: ${shallowcopy.city.name}}`)
console.log(`orgiinal name: ${obj.name}`)
console.log(`original city name: ${obj.city.name}}`)