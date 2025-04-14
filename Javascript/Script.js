const settings={
  name:"Asad",
  age:24,
  level:90
}

const data=JSON.stringify(settings,['age','level']);

console.log(data);