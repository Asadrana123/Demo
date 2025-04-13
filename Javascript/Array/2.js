Array.prototype.myMap=function(cb){
    let output=[];
    for(let i=0;i<this.length;i++){
        output.push(cb(this[i]));
    }
    return output;
}
let input=[1,2,3,4];
const result=input.myMap((curr)=>{
            return curr*2;
})
console.log(result);

//let arr = ["a", "b", "c"];

// It's actually stored internally like:

/*{
    0: "a",
    1: "b",
    2: "c",
    length: 3,
    __proto__: Array.prototype
  }*/