function fetchData() {
  return new Promise((resolve) => setTimeout(() => resolve("Server Response"), 500));
}

const flag=new Promise((resolve,reject)=>{
           setTimeout(()=>resolve('Time Out'),300)
})

Promise.race([fetchData(),flag])
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
      console.log(err);
})

//AAAAAAAAAAAA