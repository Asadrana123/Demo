function swapKeysAndValues(obj){
    let output={};
    Object.entries(obj).forEach(([Key,value])=>{
           output[value]=Key;
    })
    return output;
}
console.log(swapKeysAndValues({ a: 1, b: 2, c: 3 })); 