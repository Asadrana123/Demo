const userMessage={
    name:"Asad",
     loggedMessage(){
        console.log(this.name);
    }
}
setTimeout(userMessage.loggedMessage,1000);

//try to print Asad without bind in setTimeout