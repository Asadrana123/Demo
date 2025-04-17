const person={
    name:"Amit"
}
function greet(){
    console.log(`hi ${this.name}`)
}

const temp=greet.bind(person)
temp();