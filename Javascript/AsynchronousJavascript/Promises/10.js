//"The new Promise returned by .then() will depend on what you return or throw inside your .then() 
// callback."
//"If you don't return anything inside .then(), it automatically resolves with undefined."
//".catch() returns a Promise that resolves with what you return inside .catch() — 
// if you return nothing, it resolves with undefined."
function job(){
    return new Promise((resolve,reject)=>{
           reject();
    })
}
let promise=job();

promise
.then((result)=>{
     console.log(result);
})
.then((result)=>{
    console.log(result);
})
.catch((result)=>{
    console.log(result);
})
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
.then((result)=>{
    console.log(result);
})