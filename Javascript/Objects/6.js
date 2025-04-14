const settings={
    name:"Asad",
    age:24,
    level:90
}

const data=JSON.stringify(settings,['age','level']);

console.log(data);

//Because modern browsers format JSON strings like objects for readability in the console.

//But behind the scenes, it's just a plain string: