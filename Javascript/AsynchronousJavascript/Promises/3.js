//Promise.all()
//Waits for all promises to resolve. If any of them rejects, the entire Promise.all is rejected.
const p1=Promise.resolve("Error1");
const p2 = new Promise(res => setTimeout(() => res("Asad"), 1000));
const p3=Promise.reject("Error3");
Promise.all([p1,p2,p3])
.then((result)=>{
     console.log(result)
})
.catch((result)=>{
      console.log(result);
})
//If any of the promises reject, Promise.all() will immediately:
//❌ Reject with the first error that happens
//🚫 It will not wait to see if more promises also reject