const obj={
    name:"Asad",
    city:{
        name:"delhi",
        area:"10km"
    }
}
const shallowcopy={...obj};
shallowcopy.name="Rana";
console.log(`shallow copy:${shallowcopy}`);

console.log(`orgiinal ${obj}`)
