const p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
         resolve(1);
    },1000)
})
const p2= new Promise((resolve,reject)=>{
setTimeout(()=>{
     resolve(2);
},1000)
})
const p3= new Promise((resolve,reject)=>{
setTimeout(()=>{
     resolve(3);
},1000)
})
Promise.any([p3, p2, p1])
.then(value => {
console.log('Resolved:', value);
})
.catch(err => {
console.log('Rejected:', err);
});

console.log('End');
