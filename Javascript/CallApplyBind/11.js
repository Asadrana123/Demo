function checkpassword(login){
    let password=prompt("password?","");
    if(password==="Roadside Coder") login(true);
    else login(false);
}

let user={
    name:"Piyush Aggrwal",
    login(result){
        console.log(`${result}? "login successfull":"login failed"`,this.name)
    }
}

checkpassword(user.login.bind(user));