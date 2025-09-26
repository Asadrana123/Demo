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
