Array.prototype.myfilter=function(cb){
       let output=[];
       for(let i=0;i<this.length;i++){
          if(cb(this[i])){
             output.push(this[i]);
          }
       }
       return output;
}
let input=[1,2,3,4];
let result=input.myfilter((curr)=>{
        return curr>2;
})
console.log(result);