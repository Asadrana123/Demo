console.log("Start");
const promise1=new Promise((resolve,reject)=>{
      console.log(1);
      resolve(2);
})
promise1
.then((result)=>{
     console.log(result)
})
console.log("End");
//When it reaches resolve(2), immediately:
//The Promise state changes from "pending" to "fulfilled".
//The value 2 is stored inside the Promise.
//and most important thing "Only the function inside .then() is delayed into the microtask queue, 
// everything else runs immediately."