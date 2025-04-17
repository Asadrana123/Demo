const userMessage={
    name:"Asad",
     loggedMessage(){
        console.log(this.name);
    }
}
function outer(){
      console.log(this);
      function inner(){
         console.log(this);
      }
      inner();
}
outer.call(userMessage);
