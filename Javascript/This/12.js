function makeUser(){
   return {
          name:"Piyush",
          ref:this
   }
}
const user=makeUser();

console.log(user.ref.name);

//makeUser() is called, it's just a plain function call, not a method call.