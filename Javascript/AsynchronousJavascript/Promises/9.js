console.log("Start");
const fn = () => {
   return new Promise((resolve, reject) => {
        console.log(1);
        resolve(2);
    })
}
console.log("middle");
fn().then((result)=>{
    console.log(result);
})
console.log("End");