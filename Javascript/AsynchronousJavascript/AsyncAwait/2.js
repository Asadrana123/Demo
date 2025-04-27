// Yes, an async function always returns a promise.
// More specifically:
// If you return a value from an async function, JavaScript automatically wraps it in a resolved promise.
// If you throw an error inside an async function, it becomes a rejected promise.

async function temp(){
     return "Hello";
}

temp()
.then((result)=>{
    console.log(result)
})
