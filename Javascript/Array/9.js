const arr=[1,2,3,4,[5,6,[7,8,9]],[9,10,11,12],[13,14,[15,[16,17]]]];
const arr1=[1,2,3,4,[5,[2,3]]]
Array.prototype.myflat=function(){
      if(!Array.isArray(this)) throw new Error("Not an array");  
      let output=[];
      let depth=arguments.length==1?arguments[0]:1;
      if(depth<=0) return this;
      for(let i=0;i<this.length;i++){
          if(Array.isArray(this[i])){
             let result=this[i].myflat(depth===Infinity?depth:depth-1);
             output.push(...result);
          }
          else output.push(this[i]);
      }
      return output;
}
const flattenarray=arr.myflat(1); 

console.log(flattenarray);

