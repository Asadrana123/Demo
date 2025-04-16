var status="happy";

setTimeout(()=>{
   const status="sad";
   const data={
    status:"angry",
    getStatus(){
        return this.status;
    }
   }
   console.log(data.getStatus());
  console.log(data.getStatus.call(this));
},1000)

//will work fine in browser