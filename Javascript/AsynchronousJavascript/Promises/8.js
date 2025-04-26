console.log("Start");
const promise1=new Promise((resolve,reject)=>{
      console.log(1);
})
promise1
.then((result)=>{
     console.log(result)
})