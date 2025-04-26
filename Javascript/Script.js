function job(){
    return new Promise((resolve,reject)=>{
           reject();
    })
}
let promise=job();

let temp=promise
.then((result)=>{
     console.log(result);
})
console.log(temp);
// .then((result)=>{
//     console.log(result);
// })
// .catch((result)=>{
//     console.log(result);
// })
// .then((result)=>{
//     console.log(result);
// })