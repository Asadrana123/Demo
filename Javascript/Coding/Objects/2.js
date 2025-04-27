function filterStringValues(obj){
      Object.entries(obj).forEach(([key,value])=>{
             if(typeof value!=="string") delete obj[key]
      })
    return obj;  
}
console.log(filterStringValues({ a: "hello", b: 123, c: "world", d: true }))  