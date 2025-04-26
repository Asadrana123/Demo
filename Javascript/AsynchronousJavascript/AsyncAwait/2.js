//when we write async before a function then it returns a promise

async function temp(){
     return "Hello";
}

temp()
.then((result)=>{
    console.log(result)
})