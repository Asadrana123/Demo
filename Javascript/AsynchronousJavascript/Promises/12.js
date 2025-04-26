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
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat";
    }
    return job(true);
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
    return job(false);
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .catch(function (error) {
    console.log(error);
    return "Error caught";
  })
  .then(function (data) {
    console.log(data);
    throw new Error("test"); // Not returning a promise
  })
  .then(function (data) {
    console.log(data);
  })
.catch(function(data){
    console.log(data);
})
