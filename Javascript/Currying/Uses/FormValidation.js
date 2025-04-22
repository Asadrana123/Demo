function validation(field){
        return function(ruleFun){
              return function (value){
                     return ruleFun(value,field)
              }
        }
}

const isEmpty=(value,field)=>{
      if(value.trim().length===0) return `${field} can not be empty`
}
const isValidMobileNumber=(value,field)=>{
    if(value.trim().length<10) return `${field} should be of length 10`
}

const userValidation=validation("User Name")(isEmpty);
console.log(userValidation(""))

//if you are thinking you can do this with normal function like 
//Let's say you're validating "username" in 5 different places, and using the same rule:
//validate("Username", isNotEmpty, value1);
//validate("Username", isNotEmpty, value2);
//validate("Username", isNotEmpty, value3);
//Now tomorrow, someone says — “Hey, change "Username" to "User Name" in error messages.”
//then you have to change in all five places

