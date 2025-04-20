Array.prototype.myReduce=function(cb,acc){
      for(let i=0;i<this.length;i++){
          acc=cb(acc,this[i]);
      }
      return acc;
}
let input=[1,2,3,4];
const result=input.myReduce((acc,curr)=>{
      return acc+curr;
},0)
console.log(result);