function checkpassword(success,failed){
    let password=prompt("password?","");
    if(password==="Roadside Coder") success();
    else failed();
}

let user={
    name:"Piyush Aggrwal",
    loginsuccessful(){
        console.log(`${this.name} login successful`)
    },
    loginfailed(){
        console.log(`${this.name} login failed`)
    }
}

checkpassword(user.loginsuccessful,user.loginfailed);