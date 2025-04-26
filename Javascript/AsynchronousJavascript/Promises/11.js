function job(state){
     return new Promise((resolve,reject)=>{
          if(state){
            resolve("success")
          }
          else{
            reject("Failure");
          }
     })
}
let promise=job(true);
promise
.then((result)=>{
      console.log(result);
      return job(false);
})
.catch((error)=>{
    console.log(error);
    return "Error Caught";
})
.then((result)=>{
    console.log(result);
    return job(true);
})
.catch((error)=>{
    console.log(error)
})
