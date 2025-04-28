//A Promise is an object in JavaScript that represents the eventual
//completion or failure of an asynchronous operation.
function wait(){
     return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve();
            },1000)
     })
}
console.log(wait());
wait().then(()=>{
     console.log("1 sec passed");
}).catch(()=>{
     console.log("Failed");
})

//Yes, callbacks can handle any async task, but they come with drawbacks like callback hell, harder error 
// handling, and more complex control flow. Promises were introduced to solve these issues. With Promises, 
// we get better readability, easier chaining of async operations, and a more consistent way to handle errors
// using .catch().